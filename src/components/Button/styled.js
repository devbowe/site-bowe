import { Link } from 'gatsby';
import styled,{css} from 'styled-components';
import {defaultTheme} from '../../styles/theme'

export const StyledButton = styled.button`
  padding: 5px 20px;
  margin: 5px; 
  ${({underline})=> underline ? css`
    border: none;
    color: ${defaultTheme.typography.third};
    `
    : css`
    border-color: ${({borderColor}) => defaultTheme.colors[borderColor]};
    color: ${({textColor}) => defaultTheme.typography[textColor]};
    border: 1px solid;
  `}
  background: ${({bgColor}) => defaultTheme.colors[bgColor]};
  border-color: ${({borderColor}) => defaultTheme.colors[borderColor]};
  border-radius: 20px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  ${({underline})=> underline && css`
    text-decoration: underline; 
  `}
  

  :hover {
    ${({underline})=> underline ? css`
    color: ${defaultTheme.typography.third};
  `: css`
    color: ${({textHoverColor}) => defaultTheme.typography[textHoverColor]};
    background: ${({hoverColor}) => defaultTheme.colors[hoverColor]};
    border-color: ${({hoverColor}) => defaultTheme.colors[hoverColor]};
    `}
    ${({cursor}) => cursor ? css` cursor: pointer;`: css`cursor: default`}
  }
  :focus {
  outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
  }
  
  @media(max-width: 375px){
    font-size: 15px;
    line-height: 15px;
    padding: 5px;
  }

  ${({square}) => square && css`
  padding: 5px 10px;
  border-radius: 5px;
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 50px;
  
  @media(max-width: 375px){
    font-size: 25px;
    line-height: 30px;
    padding: 5px;
  }`}
`
export const StyledLink = styled(Link)`
text-decoration: none;
cursor: default;`
