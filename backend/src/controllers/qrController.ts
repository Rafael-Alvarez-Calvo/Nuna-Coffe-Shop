import { Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import QRCode from 'qrcode';
import QRCodeModel from '../models/QRCode';
import User from '../models/User';
import { AuthRequest } from '../types';

export const generateQRCode = async (req: AuthRequest, res: Response) => {
  try {
    const { amount } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ message: 'Monto inválido' });
    }

    // Calculate points (1 point per euro)
    const points = Math.floor(amount);

    // Generate unique code
    const code = uuidv4();

    // Create QR code
    const qrCode = new QRCodeModel({
      code,
      amount,
      points
    });

    await qrCode.save();

    // Generate QR image
    const qrImageUrl = await QRCode.toDataURL(code);

    res.status(201).json({
      message: 'Código QR generado exitosamente',
      qrCode: {
        id: qrCode._id,
        code: qrCode.code,
        amount: qrCode.amount,
        points: qrCode.points,
        qrImageUrl,
        createdAt: qrCode.createdAt
      }
    });
  } catch (error: any) {
    console.error('Generate QR error:', error);
    res.status(500).json({ message: 'Error al generar código QR', error: error.message });
  }
};

export const scanQRCode = async (req: AuthRequest, res: Response) => {
  try {
    const { code } = req.body;
    const userId = req.user?.id;

    if (!code) {
      return res.status(400).json({ message: 'Código requerido' });
    }

    // Find QR code
    const qrCode = await QRCodeModel.findOne({ code });
    if (!qrCode) {
      return res.status(404).json({ message: 'Código QR no válido' });
    }

    // Check if already used
    if (qrCode.used) {
      return res.status(400).json({ message: 'Este código QR ya ha sido utilizado' });
    }

    // Check if expired
    if (qrCode.expiresAt && qrCode.expiresAt < new Date()) {
      return res.status(400).json({ message: 'Este código QR ha expirado' });
    }

    // Find user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Update user points
    user.points += qrCode.points;
    await user.save();

    // Mark QR as used
    qrCode.used = true;
    qrCode.usedBy = user._id as any;
    qrCode.usedAt = new Date();
    await qrCode.save();

    res.json({
      message: `¡${qrCode.points} puntos añadidos!`,
      pointsAdded: qrCode.points,
      totalPoints: user.points,
      amount: qrCode.amount
    });
  } catch (error: any) {
    console.error('Scan QR error:', error);
    res.status(500).json({ message: 'Error al escanear código QR', error: error.message });
  }
};

export const getQRCodes = async (req: AuthRequest, res: Response) => {
  try {
    const qrCodes = await QRCodeModel.find()
      .populate('usedBy', 'name email')
      .sort({ createdAt: -1 })
      .limit(100);

    res.json({ qrCodes });
  } catch (error: any) {
    console.error('Get QR codes error:', error);
    res.status(500).json({ message: 'Error al obtener códigos QR', error: error.message });
  }
};
