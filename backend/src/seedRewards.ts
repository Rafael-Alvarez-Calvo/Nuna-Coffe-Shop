import Reward from './models/Reward';
import { connectDB } from './config/database';

const rewards = [
  {
    name: 'Café Gratis',
    pointsRequired: 50,
    description: 'Un café de tu elección (espresso, cappuccino, latte)',
    active: true
  },
  {
    name: 'Dulce o Croissant Gratis',
    pointsRequired: 75,
    description: 'Elige cualquier dulce artesanal o croissant',
    active: true
  },
  {
    name: 'Brunch Gratis',
    pointsRequired: 100,
    description: 'Brunch completo con bebida incluida',
    active: true
  },
  {
    name: '20% Descuento',
    pointsRequired: 150,
    description: '20% de descuento en tu próxima compra',
    active: true
  },
  {
    name: 'Combo Especial',
    pointsRequired: 200,
    description: 'Café + Brunch + Dulce de tu elección',
    active: true
  }
];

const seedRewards = async () => {
  try {
    await connectDB();
    
    // Clear existing rewards
    await Reward.deleteMany({});
    console.log('✓ Existing rewards cleared');

    // Insert new rewards
    await Reward.insertMany(rewards);
    console.log('✓ Rewards seeded successfully');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding rewards:', error);
    process.exit(1);
  }
};

seedRewards();
