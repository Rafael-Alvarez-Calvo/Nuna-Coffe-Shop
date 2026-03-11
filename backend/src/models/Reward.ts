import mongoose, { Schema, Document } from 'mongoose';

export interface IRewardDocument extends Document {
  name: string;
  pointsRequired: number;
  description: string;
  active: boolean;
  createdAt: Date;
}

const RewardSchema = new Schema<IRewardDocument>({
  name: {
    type: String,
    required: true
  },
  pointsRequired: {
    type: Number,
    required: true,
    min: 0
  },
  description: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model<IRewardDocument>('Reward', RewardSchema);
