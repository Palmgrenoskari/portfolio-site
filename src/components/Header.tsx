"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ClickableLogo from "@/components/ClickableLogo";
import MobileNav from "./MobileNav";
import ThemeToggle from "./ThemeToggle";
import { routes } from "@/data";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-bg/80 backdrop-blur-sm">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" aria-label="Home" className="flex items-center">
          <ClickableLogo />
        </Link>

        <div className="flex items-center gap-1">
          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center gap-1 font-mono text-sm">
            {routes.map((route) => {
              const active = isActive(pathname, route.href);
              return (
                <li key={route.href}>
                  <Link
                    href={route.href}
                    className={`px-3 py-2 rounded-md transition-colors ${
                      active
                        ? "text-accent"
                        : "text-muted hover:text-fg"
                    }`}
                  >
                    {route.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <ThemeToggle />

          {/* Mobile navigation */}
          <div className="md:hidden">
            <MobileNav routes={routes} />
          </div>
        </div>
      </nav>
    </header>
  );
}
