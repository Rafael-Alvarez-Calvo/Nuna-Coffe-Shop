import express from 'express';
import * as rewardController from '../controllers/rewardController';
import { authMiddleware, adminMiddleware } from '../middleware/auth';

const router = express.Router();

// Get rewards (public)
router.get('/', rewardController.getRewards);

// Create reward (admin only)
router.post('/', authMiddleware, adminMiddleware, rewardController.createReward);

export default router;
