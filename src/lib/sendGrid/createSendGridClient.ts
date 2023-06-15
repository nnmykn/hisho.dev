import client from '@sendgrid/mail'
import { env } from '@/src/constant/env'

export const createSendGridClient = () => {
  client.setApiKey(env.SENDGRID_API_KEY)
  return client
}
