import { createSendGridClient } from '@/src/lib/send-grid/create-send-grid-client'

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
