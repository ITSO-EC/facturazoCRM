import verifyEmailTemplate from './templates/verifyEmailTemplate'
import { sendEmail } from './emailSender'
import { createOtp } from '../services/otp'

export default async function sendVerificationEmail(email: string, userId: number) {
  const otp = await createOtp(userId)
  const template = verifyEmailTemplate(otp, 'info.gerenciaitso@gmail.com', 'Soporte Facturazo', 'Facturazo')
  
  sendEmail({ template, to: email, fromEmail: 'info.gerenciaitso@gmail.com', fromName: 'Itso', subject: 'Verificacion Cuenta Facturazo' })
}