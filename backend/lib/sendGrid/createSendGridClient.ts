import client from '@sendgrid/mail'
import { SENDGRID_API_KEY } from '@backend/constant'

export const createSendGridClient = () => {
  client.setApiKey(SENDGRID_API_KEY)
  return client
}
