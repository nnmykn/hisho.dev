import { createSendGridClient } from '@/src/lib/sendGrid/createSendGridClient'

type Params = {
  toEmail: string
  fromEmail: string
  subject: string
  message: string
}

export const sendMail = ({ subject, toEmail, fromEmail, message }: Params) => {
  const client = createSendGridClient()

  return client.send({
    to: toEmail,
    from: fromEmail,
    subject,
    text: message,
  })
}
