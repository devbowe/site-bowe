import styled from 'styled-components';
import { defaultTheme } from '../../styles/theme'

export const StyledTitle = styled.div`
	color: ${({ textColor }) => defaultTheme.colors[textColor]};
	line-height: 26px;
	h4 {
		font-size: 63px;
		margin: 0 auto 2vh auto;
		line-height: 54px;
		strong {
			display: block;
			color: ${defaultTheme.colors.brandRed};
		}
	}
`
export const StyledContainer = styled.div`
	background-color: ${({ backgroundColor }) => defaultTheme.colors[backgroundColor]}
`
export const StyledContainerSideways = styled.div`
	flex-direction: column;
	width: 100%;
	align-items: center;
	padding: 0 5vmax;
	hr {
		position: absolute;
		height: 1px;
		width: 100%;
		background: ${defaultTheme.colors.grayColor};
		border: 0;
		margin-top: 8vh;
		z-index: 1;
	}
	@media (max-width: 768px) {
		flex-direction: column;
		margin: 0 auto;
		.content-container {
		  padding-left: 0 !important;
		  padding-right: 0 !important;
		}
		hr {
			display: none;
		}
	  }
`

export const StyledContainerRight = styled.div`
	background-color: ${({ backgroundColor }) => defaultTheme.colors[backgroundColor]};
	@media (max-width: 768px) {
		justify-content: center;
		align-items: center;
		  div {
			  flex-direction: column;
			  margin: 0 auto;
		  }
	  }
`
export const StyledContainerLeft = styled.div`
	@media (max-width: 768px) {
		height: 50px;
		padding: 0 !important;
		background: transparent !important;
		flex-direction: row !important;
		overflow-x: auto;
		overflow-y: hidden;
		justify-content: center;
	}
`

export const StyledItemLink = styled.a`
	text-decoration: none;
	cursor: pointer;
	color: ${({ color }) => defaultTheme.colors[color]};
	background-color: ${({ backgroundColor }) => defaultTheme.colors[backgroundColor]};
	transition:all .2s;
	padding: 2vh 5vw;
	:hover {
		text-decoration: none;
		color: ${({ borderColorActive }) => defaultTheme.colors[borderColorActive]};
	 	i {
			background-color: ${({ colorActive }) => defaultTheme.colors[colorActive]};
		} 
	}
	@media (max-width: 768px) {
        border-radius: 0;
		height: 48px;
		padding-left: 1vw !important;
		padding-right: 1vw !important;
		margin-right: 2vw !important;
		margin-left: 2vw !important;
		margin-bottom: -15px !important;
		border-bottom: 3px solid ${({ borderColorActive }) => defaultTheme.colors[borderColorActive]} !important;
		:hover {
			border-radius: 0% !important;
			background-color: transparent !important;
			border-bottom: 3px solid ${({ borderColorActive }) => defaultTheme.colors[borderColorActive]} !important;
		}
	}
`
export const Indicator = styled.i`
		position: relative;
		height: 45px;
		width: 45px;
		border-radius: 100px;
		background-color: ${({ backgroundColor }) => defaultTheme.colors[backgroundColor]};
		display: block;
		margin: 2vh auto 0 auto;
		transition:all .2s;
		z-index: 2;
		@media (max-width: 768px) {
			display: none;
		}
`
export const ImageWrapper = styled.div`
	padding-right: 2vw;
	@media (max-width: 768px){
		width: 50vmax;
	}
`
export const InfoWrapper = styled.div`
	align-items: center;
	h3 {
		font-size: 25px;
		margin-top: 3vh;
	}
	@media (max-width: 768px){
		width: 80vw;
		margin: 0 auto;
		h3 {
			width: 100%;
		}
	}
`
export const StyledSubTitle = styled.div`
	font-size: 18px;
	color: ${({ textColor }) => defaultTheme.colors[textColor]}
`
