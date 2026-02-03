import Link from "next/link";
import LogoWithName from "@/components/ClickableLogo";
import MobileNav from "./MobileNav";
import ModeToggle from "./ModeToggle";
import { routes } from "@/data";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 w-full">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <LogoWithName
            name="Oskari Palmgren"
            description="MSc Student & Aspiring Dev"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex space-x-4">
            {routes.map((route) => (
              <li key={route.href}>
                <Link
                  href={route.href}
                  className={`${route.hoverColor} transition-colors px-2`}
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
          <ModeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-3">
          <ModeToggle />
          <MobileNav routes={routes} />
        </div>
      </nav>
    </header>
  );
}
