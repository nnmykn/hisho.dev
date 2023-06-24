import { env } from '@/src/constant/env'
import client from '@sendgrid/mail'

export const createSendGridClient = () => {
  client.setApiKey(env.SENDGRID_API_KEY)
  return client
}
