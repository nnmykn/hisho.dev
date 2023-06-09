import { fetchZennContents } from '@/src/app/(basic)/articles/_feature/zenn/fetchZennContents'
import { ZennCard } from '@/src/app/(basic)/articles/_feature/zenn/ZennCard'
import { ExternalLink } from '@/src/component/Link/ExternalLink'

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
            <ExternalLink
              className={'hover:opacity-80 transition-opacity'}
              href={zennContent.url}
            >
              <ZennCard zenn={zennContent} />
            </ExternalLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Page
