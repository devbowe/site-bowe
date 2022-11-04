import styled from "styled-components"
import { defaultTheme } from "../../../styles/theme"

export const StyledTitle = styled.div`
  font-size: 12px;
  text-align: center;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({ textColor }) => defaultTheme.colors[textColor]};
`
export const StyleHorseContainer = styled.div`
  padding-top: 150px;
  padding-bottom: 50px;
  background-position: top right;
  background-repeat: no-repeat;
  background-image: url(${({ troiaHorse }) => troiaHorse});
  @media (max-width: 1300px) {
    padding-top: 50px;
    background-size: 26% !important;
    background-position: bottom right !important;
  }
`
export const StyledMap = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`
export const StyleContainerAlgarBorder = styled.div`
  border-radius: 50px 50px 0px 0px;
  background: ${() => defaultTheme.colors["light"]};
  padding: 0 1rem;
  position: relative;
  z-index: 2;
  @media screen and (max-width: 420px) {
    border-radius: inherit;
    padding: 0;
  }
`

export const StyleContainerAlgar = styled.div`
  border-radius: 50px 50px 0px 0px;
  background: ${({ backgroundColor }) => defaultTheme.colors[backgroundColor]};
  margin: 1.4rem 0;
  @media screen and (max-width: 540px) {
    border-radius: 0;
    padding: 0 0 8rem !important;
    margin-bottom: 6rem;
    margin-top: 0;
  }

  @media screen and (min-width: 600px) and (max-width: 770px) {
    padding: 0 0 15rem !important;
  }
`

export const StyleContainerAlgarSides = styled.div`
  @media (max-width: 768px) {
    flex-direction: column !important;
    .side {
      width: 100% !important;
    }

    .percentage {
      flex-direction: column !important;
    }

    .form {
      max-width: 350px;
    }
  }
`

export const StyleContainerAlgarPercentage = styled.div`
  font-size: 60px;
  font-weight: bold;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }

  @media (min-width: 1300px) {
    font-size: 6rem;
  }
`

export const StyleContainerAlgarImage = styled.img`
  width: 800px;
  margin-left: -500px;

  @media (max-width: 768px) {
    width: 100% !important;
    margin-left: 0 !important;
    position: absolute;
    bottom: -15rem;
    left: -2rem;
  }

  @media (max-width: 540px) {
    width: 100% !important;
    margin-left: 0 !important;
    position: absolute;
    bottom: -8rem;
    left: -2rem;
  }
`

export const StyleContainerAlgarLogo = styled.img``

export const StyledContainerAlgarText = styled.div`
  max-width: 380px;
  line-height: 23px;
`

export const StyledContainerAlgarHeadline = styled.div`
  max-width: 380px;
  font-weight: bold;
`
export const StyledFloatingImg = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  img {
    position: absolute;
    right: -140%;
    top: -350px;
    min-width: 740px;
    height: auto;
  }
  @media screen and (max-width: 770px) {
    position: inherit;
    img {
      position: inherit;
      right: inherit;
      top: inherit;
      width: 100%;
      height: auto;
    }
  }
`
