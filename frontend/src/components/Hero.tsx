import React from 'react';
import { MapPin, Star, Phone, Map } from 'lucide-react';
import { businessInfo } from '../data/mock';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 flex items-center justify-center gap-3">
          <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="text-white font-semibold">{businessInfo.rating}</span>
            <span className="text-white/90 text-sm">/ 5</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
            <MapPin className="w-4 h-4 text-white" />
            <span className="text-white text-sm">{businessInfo.address.district}, Madrid</span>
          </div>
        </div>

        <h1 
          className="text-5xl md:text-7xl font-bold text-white mb-4"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {businessInfo.name}
        </h1>
        
        <p className="text-2xl md:text-3xl text-white/90 mb-6 font-light">
          {businessInfo.tagline}
        </p>

        <p className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed">
          Café preparado con mimo, brunch delicioso y un espacio acogedor para disfrutar de una pausa perfecta en el corazón de Madrid.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => scrollToSection('menu')}
            className="bg-[#6F4E37] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#5a3e2a] transition-all duration-300 hover:shadow-2xl hover:scale-105 w-full sm:w-auto"
          >
            Ver menú
          </button>
          <a 
            href={businessInfo.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 backdrop-blur-md text-white border-2 border-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-[#6F4E37] transition-all duration-300 hover:shadow-2xl hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <Map className="w-5 h-5" />
            Cómo llegar
          </a>
          <a 
            href={`tel:${businessInfo.phone.replace(/\s/g, '')}`}
            className="bg-[#4A6B57] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#3d5a49] transition-all duration-300 hover:shadow-2xl hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Llamar ahora
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
