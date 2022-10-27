import styled from 'styled-components';
import { defaultTheme } from '../../styles/theme';

export const StyledContainer = styled.div`
  background-color: ${({ backgroundColor }) => defaultTheme.colors[backgroundColor]};
`

export const StyledTitle = styled.div`
  color: ${({ textColor }) => defaultTheme.colors[textColor]}
`
export const StyledTitleH2 = styled.h2`
  font-weight:bold;
  color: ${({ textColor }) => defaultTheme.colors[textColor]}
`

export const StyledSubTitle = styled.div`
  font-size: 18px;
  color: ${({ textColor }) => defaultTheme.colors[textColor]};
  opacity: 0.6
`

export const StyledBlock = styled.div`
  min-height: 200px;
  flex-basis: 0;
  flex-grow: 1;
  border-radius: 20px;
  background-color: ${({ backgroundColor }) => defaultTheme.colors[backgroundColor]};
`

export const StyledBlockText = styled.p`
  font-size: 14px;
  color: ${({ textColor }) => defaultTheme.colors[textColor]}
`

export const StyledIcon = styled.img`
  
`

export const StyledIconContainer = styled.div`
  width: 60px;
  height: 60px;
`

export const StyledContainerBlocks = styled.div`
  @media (max-width: 768px) {
    flex-direction: column !important;
    padding: 50px !important;

    .column-item {
      margin-bottom: 30px !important;
    }
  }
`
