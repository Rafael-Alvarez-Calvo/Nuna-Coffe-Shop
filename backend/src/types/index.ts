import { Request } from 'express';

export interface IUser {
  _id?: string;
  email: string;
  password: string;
  name: string;
  points: number;
  emailConfirmed: boolean;
  confirmationToken?: string;
  role: 'user' | 'admin';
  createdAt?: Date;
}

export interface IContact {
  name: string;
  email: string;
  message: string;
  createdAt?: Date;
}

export interface IQRCode {
  code: string;
  amount: number;
  points: number;
  used: boolean;
  usedBy?: string;
  usedAt?: Date;
  createdAt?: Date;
  expiresAt?: Date;
}

export interface IReward {
  name: string;
  pointsRequired: number;
  description: string;
  active: boolean;
}

export interface AuthRequest extends Request {
  user?: {
    id: string;
    email: string;
    role: string;
  };
}
