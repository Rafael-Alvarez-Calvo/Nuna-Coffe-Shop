import React from 'react';
import { Star } from 'lucide-react';
import { reviews, businessInfo } from '../data/mock';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-[#F8F6F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-[#6F4E37] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Lo Que Dicen Nuestros Clientes
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-[#6F4E37]">{businessInfo.rating}</span>
            <span className="text-[#2A2A2A]/70">/ 5</span>
          </div>
          <p className="text-lg text-[#2A2A2A]/70">
            Basado en más de {businessInfo.totalReviews} reseñas en Google
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 6).map((review) => (
            <div 
              key={review.id}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-[#2A2A2A] mb-4 leading-relaxed">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-[#D6BFA7]/30">
                <div>
                  <p className="font-semibold text-[#6F4E37]">{review.name}</p>
                  <p className="text-sm text-[#2A2A2A]/60">{review.date}</p>
                </div>
              </div>

              {/* Scores */}
              {review.scores && (
                <div className="mt-4 pt-4 border-t border-[#D6BFA7]/30 grid grid-cols-3 gap-2 text-center text-xs">
                  <div>
                    <div className="font-semibold text-[#6F4E37]">{review.scores.comida}</div>
                    <div className="text-[#2A2A2A]/60">Comida</div>
                  </div>
                  <div>
                    <div className="font-semibold text-[#6F4E37]">{review.scores.servicio}</div>
                    <div className="text-[#2A2A2A]/60">Servicio</div>
                  </div>
                  <div>
                    <div className="font-semibold text-[#6F4E37]">{review.scores.ambiente}</div>
                    <div className="text-[#2A2A2A]/60">Ambiente</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
