import styled, {css} from 'styled-components';
import { defaultTheme } from '../../styles/theme'
import { Col } from 'react-bootstrap';

export const StyledCol = styled(Col)`
  ${({minHeight}) => minHeight && css`
   @media(max-width: 320px){
     min-height: 900px;
  }  
  `}
`

export const StyledSpan = styled.span`
> div{
  ${({minHeight}) => minHeight && css`
    @media(max-width: 1960px){
     min-height: 120px;
  }
    @media(max-width: 1024px){
     min-height: 380px;
  }
  @media(max-width: 768px){
     min-height: 165px;
  }
  @media(max-width: 540px){
     min-height: 250px;
  }
  @media(max-width: 414px){
     min-height: auto;
     margin-bottom: 6rem;
  }
  @media(max-width: 375px){
     min-height: initial;
  }  
  @media(max-width: 320px){
     margin-top: 10px;
     min-height: 420px;
  }  
  `}
  }
`

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
  margin-bottom: 1rem
  
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

export const StyledContent = styled.p`
  color: ${({ textColor }) => defaultTheme.colors[textColor]};
  font-family: Syne;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 2rem;
  `

export const StyledImg = styled.img`
  width: 102.3px;
  height: 35.57px;
  `



