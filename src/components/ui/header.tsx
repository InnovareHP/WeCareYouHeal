import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Staff Resources", href: "/staffing" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/#contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <div className="w-20 h-20 rounded-lg flex items-center justify-center">
                <Link to="/">
                  <img
                    src="/image/we-care-you-heal-logo.jpg"
                    alt="logo"
                    width={400}
                    height={400}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`text-gray-700 hover:text-teal-600 font-medium transition-colors ${
                  location.pathname === item.href
                    ? "text-teal-600 border-b-2 border-teal-600 pb-1"
                    : ""
                }`}
                {...(item.name === "Contact Us" && {
                  href: "mailto:gina@wecareyouheal.com",
                })}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-md hover:shadow-lg">
              <a href="mailto:gina@wecareyouheal.com">GET IN TOUCH</a>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block text-gray-700 hover:text-teal-600 font-medium py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full bg-teal-500 hover:bg-teal-600 text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-md">
              GET IN TOUCH
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
