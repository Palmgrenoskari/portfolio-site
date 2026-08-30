"use client";

import { useEffect } from "react";
import { getImageProps } from "next/image";
import { preloadImages } from "@/data/preloadImages";

let done = false;
// Hold references so the browser doesn't drop in-flight fetches.
const inFlight: HTMLImageElement[] = [];

function warm() {
  if (done) return;
  done = true;
  for (const { src, width, height } of preloadImages) {
    // Same srcset/sizes next/image will use, so the cache entries match.
    const { props } = getImageProps({ src, width, height, alt: "" });
    const img = new Image();
    if (props.srcSet) img.srcset = props.srcSet;
    if (props.sizes) img.sizes = props.sizes;
    img.src = props.src;
    inFlight.push(img);
  }
}

function scheduleWarm() {
  if (typeof window.requestIdleCallback === "function") {
    window.requestIdleCallback(warm, { timeout: 2000 });
  } else {
    window.setTimeout(warm, 200);
  }
}

/**
 * Warms the browser cache with every /projects and /about image after the
 * current page has finished loading, so those pages render without pop-in.
 */
export default function ImagePreloader() {
  useEffect(() => {
    if (done) return;
    if (document.readyState === "complete") {
      scheduleWarm();
      return;
    }
    window.addEventListener("load", scheduleWarm, { once: true });
    return () => window.removeEventListener("load", scheduleWarm);
  }, []);
  return null;
}
