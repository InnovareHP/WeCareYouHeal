import { Link } from "@tanstack/react-router";
import { Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Staff Resources", href: "/staffing" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/#contact" },
  ];

  return (
    <footer className="bg-black text-white w-full py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-teal-400 mb-4">
              We Care, You Heal
            </h3>
            <p className="text-gray-400 italic">
              "Quality care that you can see."
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-yellow-300">Quick Links</h4>
            <div className="space-y-2">
              {navItems.map((item, i) => (
                <Link
                  key={i}
                  to={item.href}
                  className="block text-gray-400 hover:text-teal-400 transition-colors"
                >
                  {item.name as string}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-yellow-300">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>Chapel Hill, NC 27514</p>
              <p>(984) 327-5491</p>
              <a
                href="mailto:gina@wecareyouheal.com"
                className="hover:text-teal-400 transition-colors block"
              >
                gina@wecareyouheal.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 We Care, You Heal. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/squarespace"
              className="text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-2"
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.youtube.com/squarespace"
              className="text-gray-400 hover:text-teal-400 transition-colors flex items-center gap-2"
            >
              <Youtube className="w-5 h-5" />
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
