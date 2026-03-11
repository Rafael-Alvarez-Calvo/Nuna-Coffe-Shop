import express from 'express';
import { body } from 'express-validator';
import * as contactController from '../controllers/contactController';
import { authMiddleware, adminMiddleware } from '../middleware/auth';

const router = express.Router();

// Create contact (public)
router.post(
  '/',
  [
    body('name').notEmpty().withMessage('El nombre es requerido'),
    body('email').isEmail().withMessage('Email inválido'),
    body('message').notEmpty().withMessage('El mensaje es requerido')
  ],
  contactController.createContact
);

// Get all contacts (admin only)
router.get('/', authMiddleware, adminMiddleware, contactController.getAllContacts);

export default router;
