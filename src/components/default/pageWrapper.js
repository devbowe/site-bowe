import React from 'react'
import GlobalStyle from '../../styles/global'
import {defaultTheme} from '../../styles/theme'
import { ThemeProvider } from 'styled-components'
import SEO from './SEO';

export default function pageWrapper(Component,color="light", title , url, description, image, lang, author) {
  const myInternalComponent = (props) => {
    return(
      <>
        <SEO
          title={title}
          description={description}
          image={image}
          url={url}
          lang={lang}
          author={author}
        />
        <ThemeProvider theme={defaultTheme}>
        <GlobalStyle color={color}/>
          <Component {...props} />
        </ThemeProvider>
      </>

    )
}
  
  return myInternalComponent
}
