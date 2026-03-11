import { Request, Response } from 'express';
import Contact from '../models/Contact';
import emailService from '../services/emailService';

export const createContact = async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Todos los campos son requeridos' });
    }

    // Create contact
    const contact = new Contact({
      name,
      email,
      message
    });

    await contact.save();

    // Send notification email
    await emailService.sendContactNotification({ name, email, message });

    res.status(201).json({
      message: 'Mensaje enviado correctamente. Te contactaremos pronto.',
      contact: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
        createdAt: contact.createdAt
      }
    });
  } catch (error: any) {
    console.error('Create contact error:', error);
    res.status(500).json({ message: 'Error al enviar mensaje', error: error.message });
  }
};

export const getAllContacts = async (req: any, res: Response) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ contacts });
  } catch (error: any) {
    console.error('Get contacts error:', error);
    res.status(500).json({ message: 'Error al obtener mensajes', error: error.message });
  }
};
