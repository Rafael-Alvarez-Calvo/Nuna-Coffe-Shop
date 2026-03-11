import React from 'react';
import { specialties } from '../data/mock';

const Specialties: React.FC = () => {
  return (
    <section id="specialties" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-[#6F4E37] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Nuestras Especialidades
          </h2>
          <p className="text-lg text-[#2A2A2A]/70 max-w-2xl mx-auto">
            Descubre lo mejor de nuestra carta, preparado con amor y dedicación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={specialty.image}
                  alt={specialty.category}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {specialty.category}
                </h3>
                <ul className="space-y-2">
                  {specialty.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex}
                      className="flex items-center gap-2 text-white/90"
                    >
                      <span className="w-1.5 h-1.5 bg-[#D6BFA7] rounded-full"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
