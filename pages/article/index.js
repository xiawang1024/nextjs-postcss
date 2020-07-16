export default function Article({ data }) {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.contentTitle}</li>
      ))}
      <style jsx>{`
        li {
          line-height: 1.5;
          margin-bottom: 20px;
        }
      `}</style>
    </ul>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    'https://pubmob.dianzhenkeji.com/cms/articles?tenantId=henanradio&channelId=1216567500624498688&pageNo=1&pageSize=20'
  )
  const { result } = await res.json()
  return {
    props: {
      data: result.content,
    },
  }
}
