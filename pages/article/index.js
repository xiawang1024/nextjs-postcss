import Link from 'next/link'

const DEMO_URL =
  'https://pubmob.dianzhenkeji.com/cms/articles?tenantId=henanradio&channelId=1216567500624498688&pageNo=1&pageSize=50'
export default function Article({ data }) {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <Link
            className="link"
            href="/article/[articleId]"
            as={`/article/${item.id}`}
          >
            <a>{item.contentTitle}</a>
          </Link>
        </li>
      ))}
      <style jsx>{`
        li {
          line-height: 1.5;
          margin-bottom: 20px;
          font-size: 22px;
        }
      `}</style>
    </ul>
  )
}

export async function getStaticProps() {
  const res = await fetch(DEMO_URL)
  const { result } = await res.json()
  return {
    props: {
      data: result.content,
    },
  }
}
