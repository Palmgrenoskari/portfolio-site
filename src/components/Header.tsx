import Link from "next/link";
import LogoWithName from "@/components/ClickableLogo";
import MobileNav from "./MobileNav";
import { routes } from "@/data";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 w-full">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <LogoWithName
            name="Oskari Palmgren"
            description="Software Developer & MSc Student"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-4">
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

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <MobileNav routes={routes} />
        </div>
      </nav>
    </header>
  );
}
