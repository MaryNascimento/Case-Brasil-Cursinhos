import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Bem Social</title>
        <link rel="shortcut icon" href='/images/favicon.ico'></link>
      </Head>
      <body className='font-opensans'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
