import { memo } from 'react'

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const
type List = (typeof list)[number]

type Props = {
  size?: List
  isHorizontal?: boolean
}

const resolveValue = (value: List | undefined) => {
  if (value === undefined) {
    return undefined
  } else if (list.includes(value)) {
    return value * 4
  }
  return undefined
}
export const Spacer = memo(({ size, isHorizontal = false }: Props) => {
  return (
    <span
      className={`block ${isHorizontal ? 'flex-1' : ''}`}
      style={{
        width: isHorizontal ? resolveValue(size) : undefined,
        height: isHorizontal ? undefined : resolveValue(size),
      }}
      aria-hidden
    />
  )
})

Spacer.displayName = 'Spacer'
