import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const LogoWrap = styled.div`
  flex: 0 2 137px;
  position: relative;
  z-index: 1;
  @media (max-width: 800px) {
    flex: 0 2 20%;
  }
  @media (max-width: 700px) {
    flex: 0 2 30%;
  }
`
const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "boweIcon" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 141,pngQuality: 100) {
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
