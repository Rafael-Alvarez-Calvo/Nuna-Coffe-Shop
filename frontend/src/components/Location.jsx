import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { businessInfo } from '../data/mock';

const Location = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-[#6F4E37] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Encuéntranos
          </h2>
          <p className="text-lg text-[#2A2A2A]/70 max-w-2xl mx-auto">
            Te esperamos en el corazón de Chamberí, Madrid
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-xl h-[400px] lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.4634474999886!2d-3.7009!3d40.4316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42288a0c9b8d0f%3A0x0!2sNuna%20Coffee%20Shop!5e0!3m2!1sen!2ses!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Nuna Coffee Shop"
            ></iframe>
          </div>

          {/* Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-[#F8F6F2] p-8 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#6F4E37] rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#6F4E37] mb-2">Dirección</h3>
                  <p className="text-[#2A2A2A] leading-relaxed">
                    {businessInfo.address.street}<br />
                    {businessInfo.address.district}, {businessInfo.address.postal} {businessInfo.address.city}<br />
                    {businessInfo.address.country}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-[#F8F6F2] p-8 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#4A6B57] rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#6F4E37] mb-2">Teléfono</h3>
                  <a 
                    href={`tel:${businessInfo.phone.replace(/\s/g, '')}`}
                    className="text-[#2A2A2A] hover:text-[#6F4E37] transition-colors text-lg"
                  >
                    {businessInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-[#F8F6F2] p-8 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#D6BFA7] rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#6F4E37]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#6F4E37] mb-2">Horario</h3>
                  <p className="text-[#2A2A2A] text-lg">
                    {businessInfo.hours}
                  </p>
                  <p className="text-[#2A2A2A]/60 text-sm mt-1">
                    Todos los días
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a 
              href={businessInfo.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#6F4E37] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#5a3e2a] transition-all duration-300 hover:shadow-xl w-full"
            >
              <Navigation className="w-5 h-5" />
              Cómo llegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
