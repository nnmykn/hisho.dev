import { fetchZennContents } from '@/src/app/(basic)/zenn/_feature/zenn/fetchZennContents'
import { ZennCard } from '@/src/app/(basic)/zenn/_feature/zenn/ZennCard'

const Page = async () => {
  const zennContents = await fetchZennContents()
  return (
    <div>
      <ul
        className={
          'grid gap-3 grid-cols-[repeat(auto-fit,_minmax(360px,_1fr))]'
        }
      >
        {zennContents.map((zennContent, index) => (
          <li key={`li_${zennContent.id}_${index}`}>
            <a
              className={'hover:opacity-80 transition-opacity'}
              href={zennContent.url}
              target={'_blank'}
            >
              <ZennCard zenn={zennContent} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Page
