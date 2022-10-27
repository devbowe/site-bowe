import styled, { css } from "styled-components"
import { defaultTheme } from "../../styles/theme"

export const h1 = styled.h1`
  font-weight: 700;
  font-style: normal;
  font-size: 47px;
  line-height: 44px;
  letter-spacing: -0.03em;
  color: ${({ color }) => defaultTheme.typography[color]};
  ${props => css`
    width: ${props.width};
    margin: ${props.m};
    margin-left: ${props.ml};
    margin-right: ${props.mr};
    margin-bottom: ${props.mb};
    margin-top: ${props.mt};
    opacity: ${props.opacity};
  `}
  span {
    color: ${({ spanColor }) => defaultTheme.typography[spanColor]};
  }
  @media (max-width: 768px) {
    font-size: 43px;
    line-height: 34px;
  }
  @media (max-width: 375px) {
    font-size: 33px;
    line-height: 30px;
  }
`

export const h2 = styled.h2`
  font-weight: bold;
  font-style: normal;
  font-size: 37px;
  line-height: 41px;
  letter-spacing: -0.03em;
  color: ${({ color }) => defaultTheme.typography[color]};
  ${props => css`
    width: ${props.width};
    margin: ${props.m};
    margin-left: ${props.ml};
    margin-right: ${props.mr};
    margin-bottom: ${props.mb};
    margin-top: ${props.mt};
    opacity: ${props.opacity};
  `}
  span {
    color: ${({ spanColor }) => defaultTheme.typography[spanColor]};
  }
  @media (max-width: 1500px) {
    font-size: 40px;
    line-height: 38px;
    width: 100%;
  }
  @media (max-width: 375px) {
    font-size: 30px;
    line-height: 28px;
    text-align: center;
  }
`
export const h3 = styled.h3`
  font-weight: 700;
  font-style: normal;
  font-size: 57px;
  line-height: 48px;
  letter-spacing: -0.03em;
  color: ${({ color }) => defaultTheme.typography[color]};
  ${props => css`
    width: ${props.width};
    margin: ${props.m};
    margin-left: ${props.ml};
    margin-right: ${props.mr};
    margin-bottom: ${props.mb};
    margin-top: ${props.mt};
    opacity: ${props.opacity};
  `}
  span {
    color: ${({ spanColor }) => defaultTheme.typography[spanColor]};
  }
  @media (max-width: 550px) {
    font-size: 3rem;
  }

  @media (max-width: 360px) {
    font-size: 37px;
    line-height: 44px;
  }
`
export const h4 = styled.h4`
  font-weight: bold;
  font-style: normal;
  font-size: 37px;
  letter-spacing: -0.03em;
  line-height: 41px;
  color: ${({ color }) => defaultTheme.typography[color]};
  ${props => css`
    width: ${props.width};
    margin: ${props.m};
    margin-left: ${props.ml};
    margin-right: ${props.mr};
    margin-bottom: ${props.mb};
    margin-top: ${props.mt};
    opacity: ${props.opacity};
  `}
  span {
    color: ${({ spanColor }) => defaultTheme.typography[spanColor]};
  }

  @media (max-width: 540px) {
    font-size: 30px;
    line-height: 1;
  }

  @media (max-width: 375px) {
    font-size: 24px;
  }

  @media (max-width: 320px) {
    font-size: 19px;
    line-height: 20px;
  }

  @media (max-width: 280px) {
    font-size: 15px;
    line-height: 18px;
  }
`

export const h5 = styled.h5`
  font-weight: normal;
  font-style: normal;
  font-size: 21px;
  line-height: 25px;
  color: ${({ color }) => defaultTheme.typography[color]};
  ${props => css`
    width: ${props.width};
    margin: ${props.m};
    margin-left: ${props.ml};
    margin-right: ${props.mr};
    margin-bottom: ${props.mb};
    margin-top: ${props.mt};
    opacity: ${props.opacity};
  `}
  span {
    color: ${({ spanColor }) => defaultTheme.typography[spanColor]};
  }
`

export const h6 = styled.h6`
  font-weight: normal;
  font-style: normal;
  font-size: 21px;
  line-height: 25px;
  color: ${({ color }) => defaultTheme.typography[color]};
  ${({ opacitySubtitle }) =>
    opacitySubtitle &&
    css`
      font-size: 17px;
      line-height: 23px;
      color: rgba(34, 33, 55, 0.7);
      text-shadow: 1px 1px 1px black;
    `}
  ${({ context }) =>
    context &&
    css`
      font-weight: 400;
      font-style: normal;
      font-size: 19px;
      line-height: 26px;
      color: ${defaultTheme.typography.primary};
    `}
  
  ${props => css`
    width: ${props.width};
    margin: ${props.m};
    margin-left: ${props.ml};
    margin-right: ${props.mr};
    margin-bottom: ${props.mb};
    margin-top: ${props.mt};
    opacity: ${props.opacity};
  `}
  span {
    color: ${({ spanColor }) => defaultTheme.typography[spanColor]};
  }
  @media (max-width: 1024px) {
    width: 90%;
  }
  @media (max-width: 375px) {
    font-size: 14px;
    line-height: 16px;
    text-align: center;
  }
`

export const body = styled.p`
  font-weight: 400;
  font-style: normal;
  font-size: 17px;
  line-height: 26px;
  color: ${({ color }) => defaultTheme.typography[color]};
  opacity: 70%;
  ${props => css`
    width: ${props.width};
    margin: ${props.m};
    margin-left: ${props.ml};
    margin-right: ${props.mr};
    margin-bottom: ${props.mb};
    margin-top: ${props.mt};
    opacity: ${props.opacity};
  `}
  span {
    color: ${({ spanColor }) => defaultTheme.typography[spanColor]};
  }

  @media (max-width: 550px) {
    br {
      display: none;
    }
  }

  @media (max-width: 375px) {
    font-size: 15px;
  }
`

export const spacing = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 26px;
  letter-spacing: 0.2em;
  color: ${({ color }) => defaultTheme.typography[color]};
  ${props => css`
    width: ${props.width};
    margin: ${props.m};
    margin-left: ${props.ml};
    margin-right: ${props.mr};
    margin-bottom: ${props.mb};
    margin-top: ${props.mt};
    opacity: ${props.opacity};
  `}
  span {
    color: ${({ spanColor }) => defaultTheme.typography[spanColor]};
  }
`

export const moreSpacing = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 26px;
  letter-spacing: 0.38em;
  text-transform: uppercase;
  color: ${({ color }) => defaultTheme.typography[color]};
  ${props => css`
    width: ${props.width};
    margin: ${props.m};
    margin-left: ${props.ml};
    margin-right: ${props.mr};
    margin-bottom: ${props.mb};
    margin-top: ${props.mt};
    opacity: ${props.opacity};
  `}
  span {
    color: ${({ spanColor }) => defaultTheme.typography[spanColor]};
  }
`
