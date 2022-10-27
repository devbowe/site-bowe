import styled from 'styled-components';
import {defaultTheme} from '../../styles/theme'

export const StyledHr = styled.div`
  height: ${({height}) => height}px;
  background-color: ${({backgroundColor}) => defaultTheme.colors[backgroundColor]};
`
