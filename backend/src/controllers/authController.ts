import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import User from '../models/User';
import emailService from '../services/emailService';

const JWT_SECRET = process.env.JWT_SECRET || 'default_secret_key';
const JWT_EXPIRE = process.env.JWT_EXPIRE || '7d';

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'El email ya está registrado' });
    }

    // Generate confirmation token
    const confirmationToken = uuidv4();

    // Create user
    const user = new User({
      email,
      password,
      name,
      confirmationToken,
      emailConfirmed: false
    });

    await user.save();

    // Send confirmation email
    await emailService.sendConfirmationEmail(email, name, confirmationToken);

    res.status(201).json({
      message: 'Usuario registrado. Por favor, confirma tu email.',
      user: {
        id: user._id,
        email: user.email,
        name: user.name
      }
    });
  } catch (error: any) {
    console.error('Register error:', error);
    res.status(500).json({ message: 'Error al registrar usuario', error: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Check if email is confirmed
    if (!user.emailConfirmed) {
      return res.status(403).json({ 
        message: 'Por favor, confirma tu email antes de iniciar sesión',
        emailNotConfirmed: true
      });
    }

    // Generate token
    const token = jwt.sign(
      { id: user._id.toString(), email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRE } as jwt.SignOptions
    );

    res.json({
      message: 'Login exitoso',
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        points: user.points,
        role: user.role
      }
    });
  } catch (error: any) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Error al iniciar sesión', error: error.message });
  }
};

export const confirmEmail = async (req: Request, res: Response) => {
  try {
    const { token } = req.params;

    const user = await User.findOne({ confirmationToken: token });
    if (!user) {
      return res.status(404).json({ message: 'Token inválido o expirado' });
    }

    if (user.emailConfirmed) {
      return res.status(400).json({ message: 'El email ya ha sido confirmado' });
    }

    user.emailConfirmed = true;
    user.confirmationToken = undefined;
    await user.save();

    // Send welcome email
    await emailService.sendWelcomeEmail(user.email, user.name);

    res.json({ message: 'Email confirmado exitosamente' });
  } catch (error: any) {
    console.error('Confirm email error:', error);
    res.status(500).json({ message: 'Error al confirmar email', error: error.message });
  }
};

export const getMe = async (req: any, res: Response) => {
  try {
    const user = await User.findById(req.user.id).select('-password -confirmationToken');
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.json({ user });
  } catch (error: any) {
    console.error('Get me error:', error);
    res.status(500).json({ message: 'Error al obtener usuario', error: error.message });
  }
};
