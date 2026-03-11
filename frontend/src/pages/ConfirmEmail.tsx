import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Coffee, CheckCircle } from 'lucide-react';
import { authService } from '../services';
import { toast } from 'sonner';

const ConfirmEmail: React.FC = () => {
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();
  const [confirming, setConfirming] = React.useState(true);
  const [success, setSuccess] = React.useState(false);

  useEffect(() => {
    if (token) {
      confirmEmail();
    }
  }, [token]);

  const confirmEmail = async () => {
    try {
      await authService.confirmEmail(token!);
      setSuccess(true);
      toast.success('¡Email confirmado exitosamente!');
      setTimeout(() => navigate('/login'), 3000);
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Error al confirmar email');
      setTimeout(() => navigate('/'), 3000);
    } finally {
      setConfirming(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F6F2] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <Coffee className="w-16 h-16 text-[#6F4E37]" />
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          {confirming ? (
            <>
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#D6BFA7] border-t-[#6F4E37] mx-auto mb-4"></div>
              <h2 className="text-2xl font-bold text-[#6F4E37] mb-2">Confirmando email...</h2>
              <p className="text-[#2A2A2A]/70">Por favor espera un momento</p>
            </>
          ) : success ? (
            <>
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-[#6F4E37] mb-2">¡Email Confirmado!</h2>
              <p className="text-[#2A2A2A]/70 mb-4">
                Tu cuenta ha sido activada exitosamente
              </p>
              <p className="text-sm text-[#2A2A2A]/60">
                Redirigiendo a iniciar sesión...
              </p>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-red-600 mb-2">Error</h2>
              <p className="text-[#2A2A2A]/70">
                No se pudo confirmar el email
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmail;
