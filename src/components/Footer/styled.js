import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled, { css } from "styled-components"
import { defaultTheme } from "../../styles/theme"

export const FooterContainer = styled.section`
  background-color: ${defaultTheme.colors.darkBlue};
  display: flex;
  flex-direction: column;
`

export const AllBoxes = styled.div`
  padding: 20px 0;
  display: flex;
  ${({ end }) =>
    end
      ? css`
          align-items: flex-end;
        `
      : css`
          align-items: flex-start;
        `}

  justify-content: space-between;
  text-align: left;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`

export const Box = styled.div`
  padding: 20px 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  max-width: 200px;
  ${({ minWidth }) =>
    minWidth &&
    css`
      cursor: default;
      color: transparent;
      min-width: 330px;
      @media (max-width: 281px) {
        width: 180px;
      }
    `}

  .text-success {
    background: #4c42d5;
    padding: 1vh 2vw;
    border-radius: 3px;
    margin-bottom: 1vh;
    color: #fff !important;
  }

  @media (max-width: 768px) {
    min-width: 50px;
    padding: 0px 15px;
  }

  @media (max-width: 768px) {
    padding: 0px 0px;
  }

  @media (max-width: 767px) {
    padding: 10px 0px;
  }

  @media (max-width: 550px) {
    max-width: 100% !important;
  }

  div {
    display: flex;
    text-align: left;
    justify-content: flex-start;
  }

  div div {
    text-align: left;
    flex-direction: column;
  }

  div div:nth-child(2) {
    padding-left: 20px;
  }
`

export const Title = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  ${({ transparent }) =>
    transparent
      ? css`
          color: ${defaultTheme.typography.none};
        `
      : css`
          color: ${defaultTheme.typography.fourth};
        `}
  text-align: left;
  opacity: 0.7;
`

export const TitleForm = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  opacity: 0.7;
  color: ${defaultTheme.typography.fourth};
  text-align: left;
  padding: 0px 0 20px 0;
  @media (max-width: 360px) {
    font-size: 14px;
  }
`

export const Text = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  color: ${defaultTheme.typography.primary};
  :hover {
    ${({ hover }) =>
      hover === false
        ? css`
            color: ${defaultTheme.typography.primary};
          `
        : css`
            color: ${defaultTheme.colors.red};
            transition: color 0.5 s;
          `}
  }
  ${props => css`
    margin-top: ${props.mt};
    margin-right: ${props.mr};
    padding-top: ${props.pt};
    padding-right: ${props.pr};
  `}
  span {
    //border-bottom: 1px solid ${defaultTheme.colors.light};
    border-radius: 2px;
  }
  @media (max-width: 375px) {
    font-size: 14px;
  }
  @media (max-width: 320px) {
    font-size: 12px;
  }
`

export const StyledLink = styled(AniLink)`
  text-decoration: none;
`
export const FormCotainer = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 20px;
  input {
    color: ${defaultTheme.colors.light};
  }
  input[type="email"]:focus {
    outline: none;
    border-color: ${defaultTheme.colors.red};
  }
  input[type="email"] {
    background: none;
    border: none;
    border-bottom: 3px solid ${defaultTheme.colors.light};
    border-radius: 2px;
    width: max(300px, 13vw);
    height: 50px;
    font-size: 18px;
    font-weight: normal;
    @media (max-width: 281px) {
      width: 180px;
    }

    @media (max-width: 360px) {
      width: max(220px, 13vw);
    }
  }
  input[type="email"]::-webkit-input-placeholder {
    color: ${defaultTheme.typography.primary};
    font-weight: normal;
    font-size: 18px;
  }
  input[type="email"]:-moz-placeholder {
    color: #000000;
    font-weight: 900;
    font-size: 15px;
    font-family: "Syne", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif, --apple-system, BlinkMacSystemFont;
  }
  input[type="email"]::-moz-placeholder {
    color: #000000;
    font-weight: 900;
    font-size: 15px;
    font-family: "Syne", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif, --apple-system, BlinkMacSystemFont;
  }
  input[type="email"]:-ms-input-placeholder {
    color: #000000;
    font-weight: 900;
    font-size: 15px;
    font-family: "Syne", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif, --apple-system, BlinkMacSystemFont;
  }
  button {
    cursor: pointer;
    margin-left: 10px;
    height: 50px;
    width: 50px;
    padding: 0;
    border: none;
    background: ${defaultTheme.colors.lightRed};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    img {
      margin-left: -5px;
    }
    :hover {
      background: ${defaultTheme.colors.red};
    }
  }
`

export const Line = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 100%;
`

export const BoxImg = styled.div`
  display: flex;
  padding-top: 1vh;
  a:first-child {
    padding-left: 0;
  }

  a {
    cursor: pointer;
    padding: 0 10px;
  }
`
