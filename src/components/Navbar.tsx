"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-[#1A73E8]">
          GandS Finance
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-medium text-gray-700">
          <Link href="/" className="hover:text-[#1A73E8] transition-colors">Home</Link>
          <Link href="/services" className="hover:text-[#1A73E8] transition-colors">Services</Link>
          <Link href="/bonus" className="hover:text-[#1A73E8] transition-colors">Bonus</Link>
          <Link href="/contact" className="hover:text-[#1A73E8] transition-colors">Contact</Link>
          <Link href="/about" className="hover:text-[#1A73E8] transition-colors">about</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4 space-y-4">
          <Link href="/" onClick={toggleMenu} className="block text-gray-700 hover:text-[#1A73E8]">Home</Link>
          <Link href="/services" onClick={toggleMenu} className="block text-gray-700 hover:text-[#1A73E8]">Services</Link>
          <Link href="/bonus" onClick={toggleMenu} className="block text-gray-700 hover:text-[#1A73E8]">Bonus</Link>
          <Link href="/contact" onClick={toggleMenu} className="block text-gray-700 hover:text-[#1A73E8]">Contact</Link>
          <Link href="/about" onClick={toggleMenu} className="block text-gray-700 hover:text-[#1A73E8]">about</Link>
        </div>
      )}
    </header>
  );
}
