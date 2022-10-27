import React from 'react';
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';

function SEO({title ,url, description, image, lang, author}){
  return(
    <Helmet
      htmlAttributes={{
        lang: lang,
      }}
      title={title}
      titleTemplate={title}
      meta={[
        {
          name: `ìmage`,
          property: `og:image`,
          content: image,
        },
        {
          name: `ìmage`,
          property: `og:image:secure_url`,
          content: image,
        },
        {
          name: `ìmage`,
          property: `og:image:type`,
          content: `image/png`,
        },
        {
          name: `ìmage`,
          property: `og:image:width`,
          content: `400`,
        },
        {
          name: `ìmage`,
          property: `og:image:height`,
          content: `400`,
        },
        {
          name: `ìmage`,
          property: `og:image:alt`,
          content: `site favIcon`,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          property: `author`,
          content: author,
        },
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ]}
    >
      <title>{title}</title>
    </Helmet>
  )
}

SEO.defaultProps = {
  title: 'Bowe',
  description: 'Somos uma empresa de Martech e Geração de Demanda B2B. Entregamos soluções para evolução digital com foco no crescimento de negócios.',
  url: 'https://www.bowe.com.br/',
  image: 'https://cdn-images-1.medium.com/max/1200/1*Wd9P5tafiZzO_eOXacYNmw.png',
  lang: 'pt_BR',
  author: 'Bowe'
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  lang: PropTypes.string,
  author: PropTypes.string,
}

export default SEO;