import Head from 'next/head'
import Demo from '@/components/demo/index'

export default function Home() {
  return (
    <div className="page">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Demo />
      </main>
      <style jsx>{`
        main {
          width: 100%;
          text-align: center;
        }
      `}</style>
    </div>
  )
}
