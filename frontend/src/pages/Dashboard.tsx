import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Coffee, Gift, QrCode, LogOut, Award } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { rewardService } from '../services';
import { Reward } from '../types';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [rewards, setRewards] = useState<Reward[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    loadRewards();
  }, [user, navigate]);

  const loadRewards = async () => {
    try {
      const { rewards } = await rewardService.getRewards();
      setRewards(rewards);
    } catch (error) {
      console.error('Error loading rewards:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) return null;

  const nextReward = rewards.find(r => r.pointsRequired > user.points);
  const pointsToNext = nextReward ? nextReward.pointsRequired - user.points : 0;

  return (
    <div className="min-h-screen bg-[#F8F6F2]">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Coffee className="w-8 h-8 text-[#6F4E37]" />
            <h1 className="text-2xl font-bold text-[#6F4E37]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Nuna
            </h1>
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-[#2A2A2A] hover:text-[#6F4E37] transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Salir</span>
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#6F4E37] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
            ¡Hola, {user.name}!
          </h2>
          <p className="text-[#2A2A2A]/70">Bienvenido a tu dashboard de puntos Nuna</p>
        </div>

        {/* Points Card */}
        <div className="bg-gradient-to-br from-[#6F4E37] to-[#5a3e2a] rounded-3xl p-8 text-white mb-8 shadow-xl">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-white/80 mb-2">Tus Puntos</p>
              <p className="text-5xl font-bold">{user.points}</p>
            </div>
            <Award className="w-16 h-16 text-white/30" />
          </div>
          {nextReward && (
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-sm text-white/80 mb-1">Próxima recompensa</p>
              <p className="font-semibold mb-2">{nextReward.name}</p>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div
                  className="bg-white rounded-full h-2 transition-all duration-500"
                  style={{ width: `${(user.points / nextReward.pointsRequired) * 100}%` }}
                ></div>
              </div>
              <p className="text-sm text-white/80 mt-2">Te faltan {pointsToNext} puntos</p>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Link
            to="/scan-qr"
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#D6BFA7]/30 rounded-full flex items-center justify-center">
                <QrCode className="w-7 h-7 text-[#6F4E37]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#6F4E37]">Escanear QR</h3>
                <p className="text-[#2A2A2A]/70 text-sm">Acumula puntos con tu compra</p>
              </div>
            </div>
          </Link>

          {user.role === 'admin' && (
            <Link
              to="/admin/generate-qr"
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#4A6B57]/30 rounded-full flex items-center justify-center">
                  <QrCode className="w-7 h-7 text-[#4A6B57]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#4A6B57]">Generar QR</h3>
                  <p className="text-[#2A2A2A]/70 text-sm">Panel de administrador</p>
                </div>
              </div>
            </Link>
          )}
        </div>

        {/* Rewards */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <Gift className="w-8 h-8 text-[#6F4E37]" />
            <h3 className="text-2xl font-bold text-[#6F4E37]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Recompensas Disponibles
            </h3>
          </div>

          {loading ? (
            <p className="text-center py-8 text-[#2A2A2A]/70">Cargando recompensas...</p>
          ) : (
            <div className="space-y-4">
              {rewards.map((reward) => (
                <div
                  key={reward._id}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                    user.points >= reward.pointsRequired
                      ? 'border-[#6F4E37] bg-[#D6BFA7]/10'
                      : 'border-[#D6BFA7] bg-gray-50'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold text-[#6F4E37] mb-1">{reward.name}</h4>
                      <p className="text-[#2A2A2A]/70 text-sm mb-2">{reward.description}</p>
                      <p className="text-sm font-medium text-[#6F4E37]">
                        {reward.pointsRequired} puntos
                      </p>
                    </div>
                    {user.points >= reward.pointsRequired && (
                      <span className="bg-[#6F4E37] text-white px-4 py-2 rounded-full text-sm font-medium">
                        ¡Disponible!
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
