import { createSendGridClient } from '@/src/lib/sendGrid/createSendGridClient'

type Params = {
  fromEmail: string
  message: string
  subject: string
  toEmail: string
}

export const sendMail = ({ fromEmail, message, subject, toEmail }: Params) => {
  const client = createSendGridClient()

  return client.send({
    from: fromEmail,
    subject,
    text: message,
    to: toEmail,
  })
}
