import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 !py-10 !mt-10 ">
      <div className="container !mx-auto !px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white !mb-3">PizzaNova 🍕</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Serving the best pizzas with fresh ingredients and authentic taste.
            Your happiness is our passion.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white !mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-red-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-400 transition-colors">
                Menu
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-400 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-400 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold text-white !mb-3">Contact</h3>
          <p className="text-sm text-gray-400">📍 Cairo, Egypt</p>
          <p className="text-sm text-gray-400">📞 +20 123 456 789</p>
          <p className="text-sm text-gray-400">✉️ info@pizzanova.com</p>

          <div className="flex gap-4 !mt-4">
            <a
              href="#"
              className="hover:text-red-400 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="hover:text-red-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="hover:text-red-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="hover:text-red-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 !mt-8 !pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} PizzaNova. All Rights Reserved.
      </div>
    </footer>
  );
}
