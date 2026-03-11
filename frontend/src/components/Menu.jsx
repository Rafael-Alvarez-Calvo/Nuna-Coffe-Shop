import React, { useState } from 'react';
import { menu } from '../data/mock';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('cafe');

  const categories = [
    { id: 'cafe', name: 'Café', icon: '☕' },
    { id: 'bebidas', name: 'Bebidas', icon: '🍵' },
    { id: 'brunch', name: 'Brunch', icon: '🥐' }
  ];

  return (
    <section id="menu" className="py-20 bg-[#F8F6F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-[#6F4E37] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Nuestro Menú
          </h2>
          <p className="text-lg text-[#2A2A2A]/70 max-w-2xl mx-auto">
            Todos nuestros productos preparados con ingredientes de calidad
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12 gap-4 flex-wrap">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#6F4E37] text-white shadow-lg scale-105'
                  : 'bg-white text-[#2A2A2A] hover:bg-[#D6BFA7]/30'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
            <div className="space-y-6">
              {menu[activeCategory].map((item, index) => (
                <div 
                  key={index}
                  className="flex justify-between items-center pb-6 border-b border-[#D6BFA7]/30 last:border-0 last:pb-0 hover:bg-[#F8F6F2] p-4 rounded-lg transition-all duration-300"
                >
                  <h3 className="text-lg font-medium text-[#2A2A2A]">
                    {item.name}
                  </h3>
                  <span className="text-xl font-bold text-[#6F4E37]" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="text-center mt-12">
          <p className="text-[#2A2A2A]/60 text-sm">
            Los precios pueden variar. Consulta en el local para más información.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
