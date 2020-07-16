import Head from 'next/head'

const DEMO_URL =
  'https://pubmob.dianzhenkeji.com/cms/articles?tenantId=henanradio&channelId=1216567500624498688&pageNo=1&pageSize=50'
const DETAIL_URL =
  'https://pubmob.dianzhenkeji.com/cms/articlewithrelated?tenantId=henanradio&articleId='

export default function ArticleDetail({ data }) {
  if (!data) {
    return false
  }
  return (
    <div>
      <Head>
        <title>{data.articleTitle}</title>
      </Head>
      <h1 className="title">{data.articleTitle}</h1>
      <div
        className="rich-text"
        dangerouslySetInnerHTML={{ __html: data.contentBody }}
      ></div>
      <style jsx>{`
        .title {
          line-height: 1.6;
          font-size: 24px;
          font-weight: bold;
        }
        .rich-text {
          width: 100%;
          line-height: 1.75;
          font-size: 18px;
        }
      `}</style>
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch(DEMO_URL)
  const { result } = await res.json()
  const paths = result.content.map((item) => ({
    params: { articleId: item.id },
  }))
  return {
    paths: paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${DETAIL_URL}${params.articleId}`)
  const { result } = await res.json()
  return {
    props: {
      data: result,
    },
  }
}
