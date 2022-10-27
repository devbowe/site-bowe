import styled from 'styled-components';
import {defaultTheme} from '../../styles/theme'

export const StyledMartechStack = styled.div`
  height: ${({height}) => height}px;
  background-color: ${({backgroundColor}) => defaultTheme.colors[backgroundColor]};
`

export const StyledTitle = styled.div`
  color: ${({textColor}) => defaultTheme.colors[textColor]}
`

export const StyledImage = styled.img`
  max-width: 600px;

  @media (max-width: 768px) {
  }
`
