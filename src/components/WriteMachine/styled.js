import styled from 'styled-components';
import { defaultTheme } from '../../styles/theme';

export const StyledTextSpotlight = styled.span`
color: ${({ writeColor }) => defaultTheme.colors[writeColor]};
font-family: Syne;
font-style: normal;
font-weight: bold;
font-size: 37px;
line-height: 41px;
letter-spacing: -0.03em;
`
