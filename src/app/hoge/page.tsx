import { ScrollArea } from '@/src/component/scroll-area/scroll-area'

const TAGS = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export default function () {
  return (
    <ScrollArea className={'h-[100svh]'}>
      {TAGS.map((tag) => (
        <div className={'p-4'} key={tag}>
          {tag}
        </div>
      ))}
    </ScrollArea>
  )
}
