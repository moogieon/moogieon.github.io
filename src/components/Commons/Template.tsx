import React, { ReactNode } from 'react'
import Footer from 'components/Commons/Footer'
import { Helmet } from 'react-helmet'

type TemplateProps = {
  title: string
  description: string
  url: string
  image: string
  children: ReactNode
}

const Template: React.FC<TemplateProps> = function ({
  title,
  description,
  url,
  image,
  children,
}) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="moogieon" />
        <meta name="twitter:creator" content="moogieon" />

        <meta
          name="google-site-verification"
          content="웹 마스터 도구가 제공하는 Meta 태그"
        />
        <html lang="ko" />
      </Helmet>
      <main className="flex flex-col">{children}</main>
      <Footer />
    </>
  )
}

export default Template
