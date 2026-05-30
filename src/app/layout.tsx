import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oskaripalmgren.dev"),
  title: "Oskari Palmgren — Software Developer",
  description:
    "Software developer working on software robotics and AI-driven systems. Projects, work history and background.",
  openGraph: {
    title: "Oskari Palmgren — Software Developer",
    description:
      "Software developer working on software robotics and AI-driven systems.",
    type: "website",
    url: "https://oskaripalmgren.dev",
  },
};

// Runs before first paint to apply the saved theme and avoid a flash.
// Defaults to dark unless the user has explicitly chosen light.
const themeScript = `
(function () {
  try {
    var dark = localStorage.getItem('theme') !== 'light';
    if (dark) document.documentElement.classList.add('dark');
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetBrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-bg text-fg min-h-screen flex flex-col w-full">
        <Header />
        <main className="flex-grow w-full px-4 py-8 sm:py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
