import { eventsSchema } from '@/app/(basic)/events/api/constant'

export default async function () {
  const events = await eventsSchema.parseAsync(
    await fetch('http://localhost:3000/events/api').then((response) =>
      response.json()
    )
  )

  return (
    <div>
      {events.map((event, index) => (
        <div key={`event_${event.name}_${index}`}>
          <h1>{event.name}</h1>
          <div>{event.date}</div>
          <div>{event.url}</div>
          <div>{event.slideUrl}</div>
        </div>
      ))}
    </div>
  )
}
