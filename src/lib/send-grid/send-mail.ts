import { createSendGridClient } from '@/lib/send-grid/create-send-grid-client'

type Parameters_ = {
  fromEmail: string
  message: string
  subject: string
  toEmail: string
}

export const sendMail = ({
  fromEmail,
  message,
  subject,
  toEmail,
}: Parameters_) => {
  const client = createSendGridClient()

  return client.send({
    from: fromEmail,
    subject,
    text: message,
    to: toEmail,
  })
}
