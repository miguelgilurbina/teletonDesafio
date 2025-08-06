import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    console.log('Formulario recibido:', data);
    
    // Configuración SMTP de Zoho
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 587,
      secure: false, // true para port 465, false para otros puertos
      auth: {
        user: 'miguel@tuweben7dias.com',
        pass: process.env.ZOHO_PASSWORD // Tu password de Zoho en .env.local
      }
    });

    // Email para ti (notificación)
    const emailToYou = {
      from: 'miguel@tuweben7dias.com',
      to: 'miguel@tuweben7dias.com',
      subject: `🚀 Nuevo Lead - TuWebEn7Días: ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #62868D, #E32283); padding: 20px; border-radius: 10px 10px 0 0;">
            <h2 style="color: white; margin: 0; text-align: center;">🎉 ¡Nuevo Cliente Potencial!</h2>
          </div>
          
          <div style="background: white; padding: 30px; border: 1px solid #e5e5e5; border-radius: 0 0 10px 10px;">
            <h3 style="color: #2D3748; margin-top: 0;">Información del Cliente:</h3>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <p style="margin: 5px 0;"><strong>👤 Nombre:</strong> ${data.name}</p>
              <p style="margin: 5px 0;"><strong>📧 Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
              <p style="margin: 5px 0;"><strong>📱 Teléfono:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
              <p style="margin: 5px 0;"><strong>🏢 Negocio:</strong> ${data.business || 'No especificado'}</p>
            </div>

            ${data.message ? `
            <div style="background: #e8f4fd; padding: 20px; border-radius: 8px; border-left: 4px solid #62868D;">
              <h4 style="color: #2D3748; margin-top: 0;">💬 Mensaje:</h4>
              <p style="color: #4a5568; line-height: 1.6; margin-bottom: 0;">${data.message}</p>
            </div>
            ` : ''}

            <div style="margin-top: 30px; padding: 20px; background: #f0f8ff; border-radius: 8px; text-align: center;">
              <p style="margin: 10px 0;"><strong>⚡ Acciones Rápidas:</strong></p>
              <div style="margin: 15px 0;">
                <a href="tel:${data.phone}" 
                   style="display: inline-block; background: #62868D; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin: 5px;">
                  📞 Llamar Ahora
                </a>
                <a href="mailto:${data.email}" 
                   style="display: inline-block; background: #E32283; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin: 5px;">
                  📧 Responder Email
                </a>
                <a href="https://wa.me/${data.phone.replace(/[^0-9]/g, '')}?text=Hola%20${data.name},%20vi%20tu%20solicitud%20en%20TuWebEn7Días.%20Te%20contacto%20para%20conversar%20sobre%20tu%20proyecto" 
                   style="display: inline-block; background: #25D366; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin: 5px;">
                   💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #718096; font-size: 14px;">
            <p>📅 Recibido: ${new Date().toLocaleString('es-CL')}</p>
            <p>🎯 Meta: Responder en menos de 2 horas</p>
          </div>
        </div>
      `
    };

    // Email de confirmación para el cliente
    const emailToClient = {
      from: 'miguel@tuweben7dias.com',
      to: data.email,
      subject: '✅ Recibimos tu solicitud - TuWebEn7Días',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #62868D, #E32283); padding: 20px; border-radius: 10px 10px 0 0;">
            <h2 style="color: white; margin: 0; text-align: center;">¡Hola ${data.name}! 👋</h2>
          </div>
          
          <div style="background: white; padding: 30px; border: 1px solid #e5e5e5; border-radius: 0 0 10px 10px;">
            <h3 style="color: #2D3748;">✅ Tu solicitud fue recibida exitosamente</h3>
            
            <p style="color: #4a5568; line-height: 1.6;">
              Gracias por confiar en <strong>TuWebEn7Días</strong> para tu proyecto web. 
              Hemos recibido tu información y me pondré en contacto contigo en las próximas <strong>2 horas hábiles</strong>.
            </p>

            <div style="background: #f0f8ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h4 style="color: #2D3748; margin-top: 0;">📋 Resumen de tu solicitud:</h4>
              <ul style="color: #4a5568; line-height: 1.6;">
                <li><strong>Nombre:</strong> ${data.name}</li>
                <li><strong>Email:</strong> ${data.email}</li>
                <li><strong>Teléfono:</strong> ${data.phone}</li>
                ${data.business ? `<li><strong>Negocio:</strong> ${data.business}</li>` : ''}
              </ul>
            </div>

            ${data.message ? `
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #62868D;">
              <h4 style="color: #2D3748; margin-top: 0;">💬 Tu mensaje:</h4>
              <p style="color: #4a5568; line-height: 1.6; font-style: italic;">"${data.message}"</p>
            </div>
            ` : ''}

            <div style="background: #e8f5e8; padding: 20px; border-radius: 8px; margin: 25px 0; text-align: center;">
              <h4 style="color: #2D3748; margin-top: 0;">🚀 Mientras tanto...</h4>
              <p style="color: #4a5568; margin-bottom: 15px;">
                Si tienes alguna pregunta urgente, puedes contactarme directamente:
              </p>
              <div>
                <a href="https://wa.me/56977221088?text=Hola%20Miguel,%20tengo%20una%20consulta%20sobre%20mi%20solicitud." 
                   style="display: inline-block; background: #25D366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 5px;">
                  💬 WhatsApp
                </a>
                <a href="tel:+56977221088" 
                   style="display: inline-block; background: #62868D; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 5px;">
                  📞 Llamar
                </a>
              </div>
            </div>

            <p style="color: #4a5568; line-height: 1.6; margin-bottom: 0;">
              <strong>Saludos,</strong><br>
              Miguel Gil Urbina<br>
              <span style="color: #E32283;">TuWebEn7Días</span><br>
              <small style="color: #718096;">Tu página web profesional lista en 7 días</small>
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #718096; font-size: 12px;">
            <p>📧 Este email fue enviado desde miguel@tuweben7dias.com</p>
            <p>🌐 Visita: <a href="https://tuweben7dias.com" style="color: #E32283;">tuweben7dias.com</a></p>
          </div>
        </div>
      `
    };

    // Enviar ambos emails
    await transporter.sendMail(emailToYou);
    await transporter.sendMail(emailToClient);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Formulario enviado correctamente. Te contactaremos pronto.' 
    });
    
  } catch (error) {
    console.error('Error enviando email:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error enviando el mensaje. Por favor intenta nuevamente o contacta directamente por WhatsApp.' 
      },
      { status: 500 }
    );
  }
}