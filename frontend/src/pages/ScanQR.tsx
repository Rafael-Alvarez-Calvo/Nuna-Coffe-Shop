import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Coffee, QrCode, ArrowLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { qrService } from '../services';
import { toast } from 'sonner';

const ScanQR: React.FC = () => {
  const { user, updateUser } = useAuth();
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!code) {
      toast.error('Por favor, ingresa un código QR');
      return;
    }

    setIsScanning(true);

    try {
      const result = await qrService.scanQR(code);
      toast.success(`¡${result.pointsAdded} puntos añadidos! Total: ${result.totalPoints} pts`);
      await updateUser();
      setCode('');
      setTimeout(() => navigate('/dashboard'), 2000);
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Error al escanear el código');
    } finally {
      setIsScanning(false);
    }
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-[#F8F6F2]">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link to="/dashboard" className="text-[#2A2A2A] hover:text-[#6F4E37] transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div className="flex items-center gap-2">
            <Coffee className="w-8 h-8 text-[#6F4E37]" />
            <h1 className="text-2xl font-bold text-[#6F4E37]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Nuna
            </h1>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#6F4E37] rounded-full mb-4">
            <QrCode className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-[#6F4E37] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
            Escanear Código QR
          </h2>
          <p className="text-[#2A2A2A]/70">
            Ingresa el código de tu ticket para acumular puntos
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <form onSubmit={handleScan} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#2A2A2A] mb-2">
                Código del ticket
              </label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Ingresa el código aquí"
                className="w-full px-4 py-4 border-2 border-[#D6BFA7] rounded-xl focus:outline-none focus:border-[#6F4E37] transition-colors text-lg text-center font-mono"
                disabled={isScanning}
              />
            </div>

            <button
              type="submit"
              disabled={isScanning}
              className="w-full bg-[#6F4E37] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#5a3e2a] transition-all duration-300 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isScanning ? 'Escaneando...' : 'Escanear y Sumar Puntos'}
            </button>
          </form>

          <div className="mt-8 p-6 bg-[#F8F6F2] rounded-2xl">
            <h3 className="font-bold text-[#6F4E37] mb-2">¿Cómo funciona?</h3>
            <ul className="space-y-2 text-sm text-[#2A2A2A]/70">
              <li>• Realiza tu compra en Nuna Coffee Shop</li>
              <li>• Solicita tu ticket con código QR</li>
              <li>• Ingresa el código aquí</li>
              <li>• Ganas 1 punto por cada euro gastado</li>
              <li>• Canjea tus puntos por recompensas increíbles</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanQR;
