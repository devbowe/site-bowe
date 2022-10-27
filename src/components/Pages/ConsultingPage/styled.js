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

  @media (max-width: 1100px) {
    padding-top: 50px;
    background-size: 26% !important;
    background-position: bottom right !important;
  }
`
export const StyledMap = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;

  @media (max-width: 1100px) {
    width: 60%;
    margin-inline: auto;
  }
`
