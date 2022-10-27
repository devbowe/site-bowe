import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 2 137px;
  position: relative;
  z-index: 1;
  @media (max-width: 768px) {
    img {
      width: 70%;
    }
  }
`
const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "boweIcon" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 141, maxHeight: 61,pngQuality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <LogoWrap as={AniLink} to="/">
      <Img fluid={data.file.childImageSharp.fluid} alt="Bowe" />
    </LogoWrap>
  )
}

export default Logo
