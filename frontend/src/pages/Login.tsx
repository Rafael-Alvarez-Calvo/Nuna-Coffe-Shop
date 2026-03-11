import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Coffee } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { toast } from 'sonner';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await login(formData.email, formData.password);
      toast.success('¡Bienvenido de nuevo!');
      navigate('/dashboard');
    } catch (error: any) {
      const message = error.response?.data?.message || 'Error al iniciar sesión';
      const emailNotConfirmed = error.response?.data?.emailNotConfirmed;
      
      if (emailNotConfirmed) {
        toast.error('Por favor, confirma tu email antes de iniciar sesión');
      } else {
        toast.error(message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F6F2] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <Link to="/" className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <Coffee className="w-10 h-10 text-[#6F4E37]" />
            <h1 className="text-3xl font-bold text-[#6F4E37]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Nuna
            </h1>
          </div>
        </Link>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-[#6F4E37] mb-2 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
            Iniciar Sesión
          </h2>
          <p className="text-center text-[#2A2A2A]/70 mb-8">
            Accede a tus puntos y recompensas
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-[#2A2A2A] mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#6F4E37]/50" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 border-2 border-[#D6BFA7] rounded-xl focus:outline-none focus:border-[#6F4E37] transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#2A2A2A] mb-2">Contraseña</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#6F4E37]/50" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 border-2 border-[#D6BFA7] rounded-xl focus:outline-none focus:border-[#6F4E37] transition-colors"
                  placeholder="Tu contraseña"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#6F4E37] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#5a3e2a] transition-all duration-300 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Iniciando sesión...' : 'Iniciar Sesión'}
            </button>
          </form>

          <p className="text-center mt-6 text-[#2A2A2A]/70">
            ¿No tienes cuenta?{' '}
            <Link to="/register" className="text-[#6F4E37] hover:underline font-medium">
              Regístrate aquí
            </Link>
          </p>
        </div>

        <Link
          to="/"
          className="block text-center mt-6 text-[#2A2A2A]/70 hover:text-[#6F4E37] transition-colors"
        >
          ← Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default Login;
