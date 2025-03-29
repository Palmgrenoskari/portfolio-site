import Link from "next/link";
import LogoWithName from "@/components/ClickableLogo";
import MobileNav from "./MobileNav";

const routes = [
  { href: "/", label: "Home", hoverColor: "hover:text-blue-400" },
  { href: "/work", label: "Work", hoverColor: "hover:text-green-400" },
  {
    href: "/education",
    label: "Education",
    hoverColor: "hover:text-yellow-400",
  },
  { href: "/projects", label: "Projects", hoverColor: "hover:text-purple-400" },
  {
    href: "/certifications",
    label: "Certifications",
    hoverColor: "hover:text-red-400",
  },
];

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
