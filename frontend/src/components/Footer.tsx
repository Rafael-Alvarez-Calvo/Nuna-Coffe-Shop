import React from 'react';
import { MapPin, Phone, Clock, Instagram } from 'lucide-react';
import { businessInfo } from '../data/mock';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#2A2A2A] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 
              className="text-3xl font-bold mb-4 text-[#D6BFA7]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Nuna
            </h3>
            <p className="text-white/70 leading-relaxed mb-4">
              Café de especialidad y brunch artesanal en el corazón de Chamberí, Madrid.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href={businessInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#6F4E37] transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={businessInfo.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#6F4E37] transition-all duration-300"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#D6BFA7]">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-white/70 hover:text-[#D6BFA7] transition-colors"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('menu')}
                  className="text-white/70 hover:text-[#D6BFA7] transition-colors"
                >
                  Menú
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="text-white/70 hover:text-[#D6BFA7] transition-colors"
                >
                  Galería
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-white/70 hover:text-[#D6BFA7] transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#D6BFA7]">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D6BFA7] flex-shrink-0 mt-1" />
                <span className="text-white/70 text-sm">
                  {businessInfo.address.street}, {businessInfo.address.district}, {businessInfo.address.city}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D6BFA7] flex-shrink-0" />
                <a 
                  href={`tel:${businessInfo.phone.replace(/\s/g, '')}`}
                  className="text-white/70 hover:text-[#D6BFA7] transition-colors"
                >
                  {businessInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#D6BFA7] flex-shrink-0" />
                <span className="text-white/70">
                  {businessInfo.hours}
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#D6BFA7]">Horario</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Lunes - Domingo</span>
                <span className="text-white font-medium">{businessInfo.hours}</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <p className="text-white/70 text-sm">
                ⭐ {businessInfo.rating} / 5
              </p>
              <p className="text-white/50 text-xs mt-1">
                Basado en {businessInfo.totalReviews}+ reseñas
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Nuna Coffee Shop. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
