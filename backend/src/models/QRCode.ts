import mongoose, { Schema, Document } from 'mongoose';

export interface IQRCodeDocument extends Document {
  code: string;
  amount: number;
  points: number;
  used: boolean;
  usedBy?: mongoose.Types.ObjectId;
  usedAt?: Date;
  createdAt: Date;
  expiresAt?: Date;
}

const QRCodeSchema = new Schema<IQRCodeDocument>({
  code: {
    type: String,
    required: true,
    unique: true
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  points: {
    type: Number,
    required: true,
    min: 0
  },
  used: {
    type: Boolean,
    default: false
  },
  usedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  usedAt: {
    type: Date,
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  expiresAt: {
    type: Date,
    default: null
  }
});

export default mongoose.model<IQRCodeDocument>('QRCode', QRCodeSchema);
