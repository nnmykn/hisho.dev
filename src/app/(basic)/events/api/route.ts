import { z } from 'zod'

const schema = z
  .object({
    date: z.date(),
    name: z.string(),
    slideUrl: z.string(),
    url: z.string(),
  })
  .array()

const json = [
  {
    date: new Date('2023/09/02'),
    name: '＼広島開催／ 若手エンジニア、デザイナーのための【ノーマウント勉強会】#2',
    slideUrl: 'https://no-mount-hiroshima-02.vercel.app/',
    url: 'https://no-mount.connpass.com/event/293639/',
  },
  {
    date: new Date('2023/06/30'),
    name: 'クローズドLT会',
    slideUrl: 'https://tailwindcss-lightning-talk.vercel.app/',
    url: '',
  },
  {
    date: new Date('2023/03/11'),
    name: 'キャリア4年以上のフロントエンドエンジニアのあたまのなか【ひろクリギルド＃14】',
    slideUrl: '',
    url: 'https://hirocreguild-14.peatix.com/view',
  },
  {
    date: new Date('2022/07/15'),
    name: 'Bridge of Developers Hiroshima #02',
    slideUrl: 'https://bridge-of-developers-hiroshima-02.vercel.app/',
    url: 'https://bod.connpass.com/event/249159/',
  },
  {
    date: new Date('2021/06/12'),
    name: 'オンラインでんかじゅくON ZOOM',
    slideUrl:
      'https://www.figma.com/proto/fMO7VNn3qj3Abag1CuRq8R/Slide?page-id=2%3A2&node-id=2-3',
    url: 'https://connpass.com/event/215979/',
  },
] satisfies z.infer<typeof schema>

export const fetchEvents = async (): Promise<z.infer<typeof schema>> => {
  try {
    return schema.parse(json)
  } catch (error) {
    throw error
  }
}
