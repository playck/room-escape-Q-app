import Head from 'next/head'

const defaultSeo = {
  title: '방탈출 부트캠프',
  description: '방탈출 문제 풀기 훈련에 도전하세요!',
  url: 'https://www.room-escape-bootcamp.com/',
  site_name: '방탈출 부트캠프',
}

function Header({
  title = defaultSeo.title,
  description = defaultSeo.description,
  url = defaultSeo.url,
  site_name = defaultSeo.site_name,
}) {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Pragma" content="no-cache" />
      <meta httpEquiv="Expires" content="0" />
      <meta httpEquiv="Expires" content="-1" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={site_name} />
    </Head>
  )
}

export default Header
