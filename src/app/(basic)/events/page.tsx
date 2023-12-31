import { env } from '@/constant/env'
import { z } from 'zod'

export const dynamic = 'force-dynamic'

const eventSchema = z.object({
  date: z.string().datetime(),
  detail: z.string().nullable(),
  github: z.string().nullable(),
  slideUrl: z.string().nullable(),
  title: z.string(),
})

export default async function () {
  const events = await z.array(eventSchema).parseAsync(
    await fetch(`${env.BACKEND_URL}/events/`, {
      headers: {
        'x-authorization': env.X_AUTHORIZATION,
      },
    }).then((response) => response.json())
  )

  return (
    <div>
      {events.map((event, index) => (
        <div key={`event_${event.detail}_${index}`}>
          <h1>{event.title}</h1>
          <div>{event.date}</div>
          <div>{event.detail}</div>
          <div>{event.slideUrl}</div>
        </div>
      ))}
    </div>
  )
}
