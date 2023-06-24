import { ImageResponse } from 'next/server'

export const runtime = 'edge'

export const alt = 'Hisho.dev'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default function () {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: '#4ECCA3',
          color: '#232931',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Hisho.dev
      </div>
    ),
    {
      ...size,
    }
  )
}
