import { Response } from 'express';
import Reward from '../models/Reward';
import { AuthRequest } from '../types';

export const getRewards = async (req: AuthRequest, res: Response) => {
  try {
    const rewards = await Reward.find({ active: true }).sort({ pointsRequired: 1 });
    res.json({ rewards });
  } catch (error: any) {
    console.error('Get rewards error:', error);
    res.status(500).json({ message: 'Error al obtener premios', error: error.message });
  }
};

export const createReward = async (req: AuthRequest, res: Response) => {
  try {
    const { name, pointsRequired, description } = req.body;

    const reward = new Reward({
      name,
      pointsRequired,
      description
    });

    await reward.save();

    res.status(201).json({
      message: 'Premio creado exitosamente',
      reward
    });
  } catch (error: any) {
    console.error('Create reward error:', error);
    res.status(500).json({ message: 'Error al crear premio', error: error.message });
  }
};
