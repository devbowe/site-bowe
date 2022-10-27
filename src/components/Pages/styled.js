import styled, { css } from "styled-components"
import { defaultTheme } from "../../styles/theme"

export const BannerContainer = styled.section`
  width: 100%;
  min-height: 600px;
  background: ${({ bgColor }) =>
    bgColor ? defaultTheme.colors[bgColor] : "#FFFFFF"};
  z-index: 1;
  position: relative;
`

export const RadiusSection = styled.section`
  width: 100%;
  border-radius: 20px 20px 0 0;
  background: ${({ bgColor }) =>
    bgColor ? defaultTheme.colors[bgColor] : "#FFFFFF"};
  margin-top: -20px;
  z-index: 2;
`

export const Section = styled.section`
  width: 100%;
  background: ${({ bgColor }) =>
    bgColor ? defaultTheme.colors[bgColor] : "#FFFFFF"};
  z-index: 2;
  padding: 4rem 6rem;
  @media (max-width: 1100px) {
    min-height: inherit;
    padding: 3.5rem 2rem;
  }
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ color }) => (color ? defaultTheme.typography[color] : "#FFFFFF")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "left")};

  ${props => css`
    width: ${props.width};
    margin: ${props.m};
    margin-top: ${props.mt};
    margin-right: ${props.mr};
    margin-bottom: ${props.mb};
    margin-left: ${props.ml};
    padding: ${props.m};
    padding-top: ${props.mt};
    padding-right: ${props.mr};
    padding-bottom: ${props.mb};
    padding-left: ${props.ml};
    opacity: ${props.opacity};
  `}

  @media(max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`

export const FlexReverse = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between !important;
  color: ${({ color }) => (color ? defaultTheme.typography[color] : "#FFFFFF")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "left")};

  ${props => css`
    width: ${props.width};
    margin: ${props.m};
    margin-top: ${props.mt};
    margin-right: ${props.mr};
    margin-bottom: ${props.mb};
    margin-left: ${props.ml};
    padding: ${props.m};
    padding-top: ${props.mt};
    padding-right: ${props.mr};
    padding-bottom: ${props.mb};
    padding-left: ${props.ml};
    opacity: ${props.opacity};
  `}

  @media(max-width: 1100px) {
    row-gap: 4rem;
  }

  @media (max-width: 850px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: unset;
  }
`
