import nodemailer from 'nodemailer';

// Mock email service - logs to console
// Replace with real SMTP credentials when available
export class EmailService {
  private transporter: any;

  constructor() {
    // Mock transporter for development
    this.transporter = {
      sendMail: async (mailOptions: any) => {
        console.log('\n📧 ===== EMAIL SENT (MOCK) =====');
        console.log('To:', mailOptions.to);
        console.log('Subject:', mailOptions.subject);
        console.log('Content:', mailOptions.html || mailOptions.text);
        console.log('================================\n');
        return { messageId: 'mock-' + Date.now() };
      }
    };

    // Uncomment for real email service:
    /*
    this.transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });
    */
  }

  async sendConfirmationEmail(email: string, name: string, token: string) {
    const confirmUrl = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/confirm-email/${token}`;
    
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'nuna@nunacoffeeshop.com',
      to: email,
      subject: 'Confirma tu email - Nuna Coffee Shop',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6F4E37;">¡Bienvenido a Nuna Coffee Shop, ${name}!</h2>
          <p>Gracias por registrarte en nuestro programa de puntos.</p>
          <p>Por favor, confirma tu dirección de email haciendo clic en el siguiente enlace:</p>
          <a href="${confirmUrl}" style="display: inline-block; padding: 12px 24px; background-color: #6F4E37; color: white; text-decoration: none; border-radius: 25px; margin: 20px 0;">
            Confirmar Email
          </a>
          <p>O copia y pega este enlace en tu navegador:</p>
          <p style="color: #666; word-break: break-all;">${confirmUrl}</p>
          <p style="margin-top: 30px; color: #666; font-size: 14px;">
            Si no te registraste en Nuna Coffee Shop, puedes ignorar este email.
          </p>
        </div>
      `
    };

    await this.transporter.sendMail(mailOptions);
  }

  async sendContactNotification(contactData: { name: string; email: string; message: string }) {
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'nuna@nunacoffeeshop.com',
      to: process.env.NOTIFICATION_EMAIL || 'admin@nunacoffeeshop.com',
      subject: `Nuevo mensaje de contacto - ${contactData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6F4E37;">Nuevo mensaje de contacto</h2>
          <div style="background-color: #f8f6f2; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${contactData.name}</p>
            <p><strong>Email:</strong> ${contactData.email}</p>
            <p><strong>Mensaje:</strong></p>
            <p style="white-space: pre-wrap;">${contactData.message}</p>
          </div>
          <p style="color: #666; font-size: 14px;">
            Recibido el ${new Date().toLocaleString('es-ES')}
          </p>
        </div>
      `
    };

    await this.transporter.sendMail(mailOptions);
  }

  async sendWelcomeEmail(email: string, name: string) {
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'nuna@nunacoffeeshop.com',
      to: email,
      subject: '¡Email confirmado! - Nuna Coffee Shop',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6F4E37;">¡Email confirmado con éxito!</h2>
          <p>Hola ${name},</p>
          <p>Tu cuenta ha sido activada. Ya puedes empezar a acumular puntos con cada compra.</p>
          <div style="background-color: #f8f6f2; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3 style="color: #6F4E37;">¿Cómo funciona?</h3>
            <ul>
              <li>Ganas 1 punto por cada euro que gastes</li>
              <li>Escanea el código QR de tu ticket después de cada compra</li>
              <li>Canjea tus puntos por premios increíbles</li>
            </ul>
          </div>
          <p>¡Te esperamos en Nuna Coffee Shop!</p>
        </div>
      `
    };

    await this.transporter.sendMail(mailOptions);
  }
}

export default new EmailService();
