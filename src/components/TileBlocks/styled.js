import { Link } from 'gatsby';
import styled from 'styled-components';
import {defaultTheme} from '../../styles/theme'

export const StyledTitle = styled.div`
  font-size: 12px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({textColor}) => defaultTheme.colors[textColor]}
`

export const StyledBlock = styled.h2`
  color: ${defaultTheme.colors.light};
  background-color: ${({backgroundColor}) => defaultTheme.colors[backgroundColor]};
  font-weight: bold;
  font-size: 1.5em;
  line-height: 50px;
  display: flex;
  align-items: center;
  text-align: center;

  :hover{
    background-color: ${({hoverColor}) => defaultTheme.colors[hoverColor]};
    transition: background-color 0.7s;
  }
`

export const StyledLink = styled(Link)`
text-decoration: none;
outline: none;

  :hover{
    text-decoration: none;
    outline:none;
  }
`
