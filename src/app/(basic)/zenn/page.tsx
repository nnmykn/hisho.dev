import { fetchZennContents } from '@/src/app/(basic)/zenn/_feature/zenn/fetchZennContents'
import { ExternalImage } from '@/src/component/Image/ExternalImage'

const Page = async () => {
  const zennContents = await fetchZennContents()
  return (
    <div>
      <ul>
        {zennContents.map((zennContent, index) => (
          <li key={`li_${zennContent.id}_${index}`}>
            <article>
              <h1>{zennContent.title}</h1>
              <div>{zennContent.type}</div>
              <time>{zennContent.publishedAt}</time>
              <a href={zennContent.url} target={'_blank'}>
                {zennContent.url}
              </a>
              {zennContent.image && (
                <ExternalImage src={zennContent.image.url} />
              )}
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Page
