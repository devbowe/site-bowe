import styled from 'styled-components';
import { defaultTheme } from '../../styles/theme'

export const StyledTitle = styled.span`
  color: ${({ textColor }) => defaultTheme.colors[textColor]};
  text-transform:uppercase;
  font-family: Syne;
  font-style: normal;
  font-weight: normal;
  margin: 11px 0px;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.1em;
`

export const StyledTextPrimary = styled.span`
  color: ${({ textColor }) => defaultTheme.colors[textColor]};
  font-family: Syne;
  font-style: normal;
  font-weight: bold;
  font-size: 37px;
  line-height: 41px;
  letter-spacing: -0.03em;
`

export const StyledTextSpotlight = styled.span`
  color: ${({ textColor }) => defaultTheme.colors[textColor]};
  font-family: Syne;
  font-style: normal;
  font-weight: bold;
  font-size: 37px;
  line-height: 41px;
  letter-spacing: -0.03em;
`

export const StyledContentText = styled.p`
  color: ${({ textColor }) => defaultTheme.colors[textColor]};
  word-wrap: break-word;
  font-family: Syne;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  `

  export const StyledPercentage = styled.span`
  color: ${({ textColor }) => defaultTheme.colors[textColor]};
  font-size: 2em;
  font-weight: bold;
  font-family: Syne;
  `



