import styled from 'styled-components';
import { defaultTheme } from '../../styles/theme'

export const StyledTitle = styled.div`
  font-size: 12px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({ textColor }) => defaultTheme.colors[textColor]}
`

export const StyledBlockImg = styled.img`
  max-height: 50px;
  max-width: 150px;
  filter: grayscale(100%);
  transition:all .5s;
  &:hover {
    filter: grayscale(0%);
  }
`
