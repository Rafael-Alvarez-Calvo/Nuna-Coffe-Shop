import express from 'express';
import { body } from 'express-validator';
import * as qrController from '../controllers/qrController';
import { authMiddleware, adminMiddleware } from '../middleware/auth';

const router = express.Router();

// Generate QR (admin only)
router.post(
  '/generate',
  authMiddleware,
  adminMiddleware,
  [
    body('amount').isNumeric().withMessage('El monto debe ser un número')
  ],
  qrController.generateQRCode
);

// Scan QR (authenticated users)
router.post(
  '/scan',
  authMiddleware,
  [
    body('code').notEmpty().withMessage('El código es requerido')
  ],
  qrController.scanQRCode
);

// Get all QR codes (admin only)
router.get('/list', authMiddleware, adminMiddleware, qrController.getQRCodes);

export default router;
