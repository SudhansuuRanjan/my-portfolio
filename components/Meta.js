import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="author" content="Sudhanshu Ranjan" />
        <meta name="author" content="Spectre_7" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"></link>
        {/* <link rel="apple-touch-icon" href="apple-touch-icon.jpg" /> */}
        {/* <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" /> */}
        <meta name="twitter:title" content="Sudhanshu Ranjan" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@craftzdog" />
        <meta name="twitter:creator" content="@craftzdog" />
        <meta name="twitter:image" content="https://sudhanshu-ranjan.vercel.app/card.jpg" />
        <meta property="og:site_name" content="Sudhanshu Ranjan" />
        <meta name="og:title" content="Sudhanshu Ranjan" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://sudhanshu-ranjan.vercel.app/card.jpg" />
        <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: "Sudhanshu Ranjan - Homepage",
  keywords: 'web development, programming, frontend development',
  description: "Sudhanshu's Homepage",
}

export default Meta