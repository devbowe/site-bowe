import styled from 'styled-components';
import {defaultTheme} from '../../styles/theme'

export const StyledMartechStack = styled.div`
  height: ${({height}) => height}px;
  background-color: ${({backgroundColor}) => defaultTheme.colors[backgroundColor]};
`

export const StyledTitle = styled.div`
  color: ${({textColor}) => defaultTheme.colors[textColor]}
`

export const StyledSubTitle = styled.div`
  font-size: 18px;
  color: ${({textColor}) => defaultTheme.colors[textColor]}
`

export const StyledImage = styled.img`
  max-width: 900px;
  margin-top: -100px;

  @media (max-width: 768px) {
    margin-top: 0 !important;
  }
`

