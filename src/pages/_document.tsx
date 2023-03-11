import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <meta name="robots" content="noindex" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400&family=Sorts+Mill+Goudy:ital@0;1&display=swap" 
          rel="stylesheet"
        />
      </Head>
      <body className='bg-[#F1F1F1]'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
