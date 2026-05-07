"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#cultos", label: "Cultos" },
  { href: "#ministerios", label: "Ministérios" },
  { href: "#eventos", label: "Eventos" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-orange-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-lg">R</span>
          </div>
          <span className={`font-bold text-lg transition-colors ${scrolled ? "text-gray-900" : "text-white"}`}>
            Igreja Ressoar
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className={`text-sm font-medium transition-colors hover:text-orange-500 ${scrolled ? "text-gray-700" : "text-white/90"}`}>
              {l.label}
            </a>
          ))}
          <a href="https://servirapp.vercel.app"
            className="ml-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
            Área do Voluntário
          </a>
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className={`md:hidden ${scrolled ? "text-gray-800" : "text-white"}`}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block text-gray-700 font-medium py-1 hover:text-orange-600 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="https://servirapp.vercel.app"
            className="block bg-orange-600 text-white text-center font-medium px-4 py-2.5 rounded-lg mt-2">
            Área do Voluntário
          </a>
        </div>
      )}
    </header>
  );
}
