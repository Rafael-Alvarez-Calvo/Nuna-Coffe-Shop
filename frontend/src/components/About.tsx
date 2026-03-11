import React from 'react';
import { Coffee, Croissant, Leaf } from 'lucide-react';
import { businessInfo, values } from '../data/mock';
import { Value } from '../types';

const iconMap: Record<string, React.ComponentType<any>> = {
  Coffee: Coffee,
  Croissant: Croissant,
  Leaf: Leaf
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#F8F6F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-[#6F4E37] mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Sobre Nuna
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-[#2A2A2A] leading-relaxed mb-6">
              {businessInfo.description}
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => {
            const IconComponent = iconMap[value.icon];
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D6BFA7]/30 rounded-full mb-6">
                  <IconComponent className="w-8 h-8 text-[#6F4E37]" />
                </div>
                <h3 className="text-xl font-bold text-[#6F4E37] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {value.title}
                </h3>
                <p className="text-[#2A2A2A]/80 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
