import api from './api';
import { AuthResponse, User, ContactFormData, Reward, QRCode } from '../types';

export const authService = {
  register: async (name: string, email: string, password: string): Promise<AuthResponse> => {
    const response = await api.post('/auth/register', { name, email, password });
    return response.data;
  },

  login: async (email: string, password: string): Promise<AuthResponse> => {
    const response = await api.post('/auth/login', { email, password });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },

  confirmEmail: async (token: string): Promise<{ message: string }> => {
    const response = await api.get(`/auth/confirm-email/${token}`);
    return response.data;
  },

  getMe: async (): Promise<{ user: User }> => {
    const response = await api.get('/auth/me');
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
  },
};

export const contactService = {
  sendMessage: async (data: ContactFormData): Promise<{ message: string }> => {
    const response = await api.post('/contact', data);
    return response.data;
  },
};

export const qrService = {
  generateQR: async (amount: number): Promise<{ qrCode: QRCode }> => {
    const response = await api.post('/qr/generate', { amount });
    return response.data;
  },

  scanQR: async (code: string): Promise<{ message: string; pointsAdded: number; totalPoints: number; amount: number }> => {
    const response = await api.post('/qr/scan', { code });
    return response.data;
  },

  getQRCodes: async (): Promise<{ qrCodes: QRCode[] }> => {
    const response = await api.get('/qr/list');
    return response.data;
  },
};

export const rewardService = {
  getRewards: async (): Promise<{ rewards: Reward[] }> => {
    const response = await api.get('/rewards');
    return response.data;
  },
};
