import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Coffee, QrCode, ArrowLeft, Download } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { qrService } from '../services';
import { toast } from 'sonner';

const GenerateQR: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');
  const [qrImageUrl, setQrImageUrl] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [points, setPoints] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  if (!user || user.role !== 'admin') {
    navigate('/dashboard');
    return null;
  }

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();

    const amountNum = parseFloat(amount);
    if (isNaN(amountNum) || amountNum <= 0) {
      toast.error('Por favor, ingresa un monto válido');
      return;
    }

    setIsGenerating(true);

    try {
      const result = await qrService.generateQR(amountNum);
      setQrImageUrl(result.qrCode.qrImageUrl);
      setQrCode(result.qrCode.code);
      setPoints(result.qrCode.points);
      toast.success('Código QR generado exitosamente');
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Error al generar código QR');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleReset = () => {
    setAmount('');
    setQrImageUrl('');
    setQrCode('');
    setPoints(0);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = qrImageUrl;
    link.download = `qr-nuna-${qrCode.slice(0, 8)}.png`;
    link.click();
  };

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
              Nuna - Admin
            </h1>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#4A6B57] rounded-full mb-4">
            <QrCode className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-[#6F4E37] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
            Generar Código QR
          </h2>
          <p className="text-[#2A2A2A]/70">
            Crea códigos QR para tickets de compra
          </p>
        </div>

        {!qrImageUrl ? (
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <form onSubmit={handleGenerate} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#2A2A2A] mb-2">
                  Monto de la compra (€)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="10.50"
                  className="w-full px-4 py-4 border-2 border-[#D6BFA7] rounded-xl focus:outline-none focus:border-[#6F4E37] transition-colors text-lg text-center"
                  disabled={isGenerating}
                />
                <p className="text-sm text-[#2A2A2A]/60 mt-2 text-center">
                  Se generará {amount ? Math.floor(parseFloat(amount)) : '0'} punto(s)
                </p>
              </div>

              <button
                type="submit"
                disabled={isGenerating}
                className="w-full bg-[#4A6B57] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#3d5a49] transition-all duration-300 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? 'Generando...' : 'Generar Código QR'}
              </button>
            </form>

            <div className="mt-8 p-6 bg-[#F8F6F2] rounded-2xl">
              <h3 className="font-bold text-[#6F4E37] mb-2">Instrucciones</h3>
              <ul className="space-y-2 text-sm text-[#2A2A2A]/70">
                <li>• Ingresa el monto total de la compra</li>
                <li>• Se generará 1 punto por cada euro</li>
                <li>• Descarga o imprime el código QR</li>
                <li>• Entrégalo al cliente con su ticket</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
            <h3 className="text-xl font-bold text-[#6F4E37] mb-4">¡Código QR Generado!</h3>
            
            <div className="bg-white p-6 rounded-2xl border-2 border-[#D6BFA7] mb-6 inline-block">
              <img src={qrImageUrl} alt="QR Code" className="w-64 h-64" />
            </div>

            <div className="bg-[#F8F6F2] rounded-2xl p-6 mb-6 text-left">
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-[#2A2A2A]/60">Monto:</p>
                  <p className="text-lg font-bold text-[#6F4E37]">{amount} €</p>
                </div>
                <div>
                  <p className="text-sm text-[#2A2A2A]/60">Puntos:</p>
                  <p className="text-lg font-bold text-[#6F4E37]">{points} pts</p>
                </div>
                <div>
                  <p className="text-sm text-[#2A2A2A]/60">Código:</p>
                  <p className="text-xs font-mono text-[#2A2A2A] break-all">{qrCode}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleDownload}
                className="flex-1 bg-[#4A6B57] text-white px-6 py-3 rounded-full font-medium hover:bg-[#3d5a49] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Descargar QR
              </button>
              <button
                onClick={handleReset}
                className="flex-1 bg-[#6F4E37] text-white px-6 py-3 rounded-full font-medium hover:bg-[#5a3e2a] transition-all duration-300"
              >
                Generar Otro
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GenerateQR;
