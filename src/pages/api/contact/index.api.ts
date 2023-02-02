import type { NextApiRequest, NextApiResponse } from 'next'
import { ContactService } from '@src/pages/api/contact/contact.service'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { data, error, status } = await ContactService.createContact(req.body)
    if (typeof data !== 'undefined') {
      res.status(status).json(data)
    } else if (typeof error !== 'undefined') {
      res.status(status).json(error)
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}

export default handler
