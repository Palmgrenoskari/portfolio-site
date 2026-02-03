import "./globals.css";
import { Inter } from "next/font/google";
import ModeToggle from "@/components/ModeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oskari Palmgren - Portfolio",
  description: "Personal portfolio showcasing my work, education and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-900 text-gray-100 min-h-screen flex flex-col w-full`}
      >
        {children}
        <ModeToggle />
      </body>
    </html>
  );
}
