import Head from 'next/head'
import Demo from '@/components/demo/index'
import Router from 'next/router'

export default function Home() {
  return (
    <div className="page">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Demo />
        <button onClick={() => Router.push('/article')}> to article </button>
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
