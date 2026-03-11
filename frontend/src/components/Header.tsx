import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Menu, X } from 'lucide-react';
import { businessInfo } from '../data/mock';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div 
            className="cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <h1 className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-[#6F4E37]' : 'text-white'
            }`} style={{ fontFamily: 'Playfair Display, serif' }}>
              Nuna
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className={`transition-colors duration-300 hover:text-[#6F4E37] ${
                isScrolled ? 'text-[#2A2A2A]' : 'text-white'
              }`}
            >
              Nosotros
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className={`transition-colors duration-300 hover:text-[#6F4E37] ${
                isScrolled ? 'text-[#2A2A2A]' : 'text-white'
              }`}
            >
              Menú
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className={`transition-colors duration-300 hover:text-[#6F4E37] ${
                isScrolled ? 'text-[#2A2A2A]' : 'text-white'
              }`}
            >
              Galería
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`transition-colors duration-300 hover:text-[#6F4E37] ${
                isScrolled ? 'text-[#2A2A2A]' : 'text-white'
              }`}
            >
              Contacto
            </button>
            
            {user ? (
              <>
                <Link 
                  to="/dashboard"
                  className={`transition-colors duration-300 hover:text-[#6F4E37] ${
                    isScrolled ? 'text-[#2A2A2A]' : 'text-white'
                  }`}
                >
                  Mi Cuenta ({user.points} pts)
                </Link>
                <button 
                  onClick={logout}
                  className="flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-full hover:bg-red-700 transition-all duration-300"
                >
                  Salir
                </button>
              </>
            ) : (
              <Link 
                to="/login"
                className="flex items-center gap-2 bg-[#6F4E37] text-white px-5 py-2.5 rounded-full hover:bg-[#5a3e2a] transition-all duration-300 hover:shadow-lg"
              >
                Iniciar Sesión
              </Link>
            )}
            
            <a 
              href={`tel:${businessInfo.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 bg-[#4A6B57] text-white px-5 py-2.5 rounded-full hover:bg-[#3d5a49] transition-all duration-300 hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">Llamar</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-[#2A2A2A]' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-[#2A2A2A]' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left px-4 py-2 text-[#2A2A2A] hover:text-[#6F4E37] transition-colors"
              >
                Nosotros
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-left px-4 py-2 text-[#2A2A2A] hover:text-[#6F4E37] transition-colors"
              >
                Menú
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-left px-4 py-2 text-[#2A2A2A] hover:text-[#6F4E37] transition-colors"
              >
                Galería
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left px-4 py-2 text-[#2A2A2A] hover:text-[#6F4E37] transition-colors"
              >
                Contacto
              </button>
              <a 
                href={`tel:${businessInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 bg-[#6F4E37] text-white px-4 py-3 rounded-full hover:bg-[#5a3e2a] transition-colors mx-4"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">Llamar ahora</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
