"use client";

import {
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-semibold text-[#1A73E8] mb-4">GandS Finance</h3>
          <p className="text-sm text-gray-300">
            We help individuals and businesses grow financially with expert consulting and proven strategies.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-medium mb-3 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-[#1A73E8] transition">Home</a></li>
            <li><a href="/services" className="hover:text-[#1A73E8] transition">Services</a></li>
            <li><a href="/bonus" className="hover:text-[#1A73E8] transition">Bonus</a></li>
            <li><a href="/contact" className="hover:text-[#1A73E8] transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div>
          <h4 className="text-lg font-medium mb-3 text-white">Follow Us</h4>
          <div className="flex space-x-4 text-gray-300">
            <a href="#" aria-label="Facebook" className="hover:text-[#1A73E8] transition">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-[#1A73E8] transition">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#1A73E8] transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-medium mb-3 text-white">Get in Touch</h4>
          <p className="flex items-center gap-2 text-sm text-gray-300">
            <Mail size={16} /> support@gandsfinance.com
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-300">
            <Phone size={16} /> +91 98765 43210
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm text-gray-400 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} GandS Financial Consultants. All rights reserved. | 
        <a href="#" className="hover:text-[#1A73E8] mx-1">Privacy Policy</a> | 
        <a href="#" className="hover:text-[#1A73E8] mx-1">Terms</a> | 
        <a href="#" className="hover:text-[#1A73E8] mx-1">Sitemap</a>
      </div>
    </footer>
  );
}
