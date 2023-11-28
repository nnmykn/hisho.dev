import { z } from 'zod'

export const eventSchema = z.object({
  date: z.string().datetime(),
  name: z.string(),
  slideUrl: z.string(),
  url: z.string(),
})

export const eventsSchema = z.array(eventSchema)

export type Event = z.infer<typeof eventSchema>
export type Events = Event[]
