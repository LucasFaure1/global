import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/Automatice (7).png" alt="Global Automate" className="w-12 h-12" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
              Global Automate
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-700 transition-colors font-medium">
              Inicio
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-700 transition-colors font-medium">
              Servicios
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-700 transition-colors font-medium">
              Portfolio
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-700 transition-colors font-medium">
              Nosotros
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-700 transition-colors font-medium">
              Contacto
            </a>
            <button 
              onClick={() => window.open('https://wa.me/541124684985', '_blank')}
              className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all transform hover:scale-105"
            >
              Comenzar
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-700 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-700 transition-colors">
                Inicio
              </a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-700 transition-colors">
                Servicios
              </a>
              <a href="#portfolio" className="block px-3 py-2 text-gray-700 hover:text-blue-700 transition-colors">
                Portfolio
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-700 transition-colors">
                Nosotros
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-700 transition-colors">
                Contacto
              </a>
              <button 
                onClick={() => window.open('https://wa.me/541124684985', '_blank')}
                className="w-full mt-2 bg-gradient-to-r from-blue-700 to-cyan-500 text-white px-4 py-2 rounded-full font-medium"
              >
                Comenzar
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;