import styled from 'styled-components';
import {defaultTheme} from '../../styles/theme'

export const StyledButton = styled.button`
  border: 0;
  cursor: pointer;
  color: ${({textColor}) => defaultTheme.colors[textColor]};
  background: ${({bgColor}) => defaultTheme.colors[bgColor]};
  border-radius: 20px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  transition: all .2s;
  :hover{
    background: ${({hoverColor}) => defaultTheme.colors[hoverColor]};
  }

  @media(max-width: 375px){
    font-size: 15px;
    line-height: 15px;
    padding: 5px;
  }
`