import styled from 'styled-components';
import { defaultTheme } from '../../styles/theme'

export const StyledTitle = styled.div`
	color: ${({ textColor }) => defaultTheme.colors[textColor]}
`

export const StyledContainer = styled.div`
	background-color: ${({ backgroundColor }) => defaultTheme.colors[backgroundColor]}
`

export const StyledContainerSideways = styled.div`
	@media (max-width: 768px) {
		flex-direction: column;
		.content-container {
			padding-left: 0 !important;
			padding-right: 0 !important;
		}
	}
`

export const StyledContainerRight = styled.div`
	background-color: ${({ backgroundColor }) => defaultTheme.colors[backgroundColor]};
	min-height: 400px;
	width: auto;
	.content-container {
	width: 550px;
	}
	@media (max-width: 768px){
		min-height: 200px;
		padding-top: 30px;
		}
		@media (max-width: 420px){
			padding: 0;
			min-height: 310px
		}
`

export const StyledContainerLeft = styled.div`
	background-color: ${({ backgroundColor }) => defaultTheme.colors[backgroundColor]};
	justify-content: center !important;
	border-radius: 10px !important;
	@media (max-width: 768px) {
		height: 50px;
		padding: 0 !important;
		border-radius: 0 !important;
		background: transparent !important;
		flex-direction: row !important;
		justify-content: flex-start !important;
		overflow-x: auto;
		overflow-y: hidden;
		border-bottom: 2px solid ${() => defaultTheme.colors['ice']};
	}
`

export const StyledItemLink = styled.a`
	text-decoration: none;
	cursor: pointer;
	color: ${({ backgroundColor }) => defaultTheme.colors[backgroundColor]};
	background-color: ${({ borderColorActive }) => defaultTheme.colors[borderColorActive]};
	border-radius: 10px 0px 0px 10px;
	:hover {
		text-decoration: none;
		color: ${({ backgroundColor }) => defaultTheme.colors[backgroundColor]};
	}
 	@media (max-width: 768px) {
		span {
			display: block;
			width: 240px;
			color: ${({ color }) => defaultTheme.colors[color]};
		}
		border-radius: 0 !important;
		height: auto;
		padding-left: 0 !important;
		padding-right: 0 !important;
		margin-right: 5px !important;
		margin-bottom: 0px !important;
		color: ${({ borderColorActive }) => defaultTheme.colors[borderColorActive]};
		border-bottom: 3px solid ${({ borderColorActive }) => defaultTheme.colors[borderColorActive]} !important;
		background-color: transparent !important;
		:hover {
			border-radius: 0 !important;
			background-color: transparent !important;
		}
	}
`

export const StyledSubTitle = styled.div`
  font-size: 18px;
  color: ${({ textColor }) => defaultTheme.colors[textColor]}
`