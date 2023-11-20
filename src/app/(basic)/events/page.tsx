import { fetchEvents } from '@/app/(basic)/events/api/route'

export const dynamic = 'force-dynamic'
export default async function () {
  const events = await fetchEvents()

  return (
    <div>
      {events.map((event, index) => (
        <div key={`event_${event.name}_${index}`}>
          <h1>{event.name}</h1>
          <div>{event.date.toDateString()}</div>
          <div>{event.url}</div>
          <div>{event.slideUrl}</div>
        </div>
      ))}
    </div>
  )
}
