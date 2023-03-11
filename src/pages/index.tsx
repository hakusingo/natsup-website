import Head from 'next/head'
import Layout from '@/components/layout'
import Hero from '@/components/index/hero'
import News from '@/components/index/news'
import Sns from '@/components/index/sns'
import Address from '@/components/index/address'

export default function Home() {
  
  return (
    <Layout>
      <Head>
        <title>Natsup | Home</title>
        <meta name="description" content="葛飾区にあるシュガーリングサロン「Natupi(ナチュピ)」の公式ホームページです。Natupiはシュガーリングという技術をつかい脱毛を行います。はちみつや砂糖を原料とした無添加のペーストで身体に優しい方法で脱毛を行います。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero/>
        <News/>
        <Sns/>
        <Address/>
      </main>
    </Layout>
  )
}
