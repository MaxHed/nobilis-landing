import { defineEventHandler, readBody } from 'h3'
import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  // Validation côté serveur
  if (!body.name || !body.email || !body.message) {
    return { status: 'error', message: 'Tous les champs sont requis.' }
  }
  
  // Configuration de Nodemailer
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    // Envoi de l'email
    await transporter.sendMail({
      from: `"Formulaire de contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: "Nouveau message de contact",
      text: `Nom: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`,
      html: `<p><strong>Nom:</strong> ${body.name}</p>
             <p><strong>Email:</strong> ${body.email}</p>
             <p><strong>Message:</strong> ${body.message}</p>`,
    })

    return { status: 'success', message: 'Votre message a été envoyé avec succès.' }
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)
    return { status: 'error', message: 'Une erreur est survenue lors de l\'envoi du message.' }
  }
})

