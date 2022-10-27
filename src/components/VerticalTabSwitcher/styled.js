import styled from 'styled-components';
import { defaultTheme } from '../../styles/theme'

export const StyledTitle = styled.div`
  color: ${({ textColor }) => defaultTheme.colors[textColor]};
  li {
    line-height: 21px;
  }
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
    min-height: 350px;
    .content-container{
      width: auto;
    }
  }
  @media (max-width: 375px){
    h2 {
      text-align: left;
    }
  }
`

export const StyledContainerLeft = styled.div`
  background-color: ${({ backgroundColor }) => defaultTheme.colors[backgroundColor]};
  border-radius: 10px;
  height: auto;
  justify-content: center;
  @media (max-width: 768px) {
    height: 50px;
    padding: 0 !important;
    background: transparent !important;
    flex-direction: row !important;
    overflow-x: auto;
    overflow-y: hidden;
    border-bottom: 2px solid ${() => defaultTheme.colors['ice']};
  }
`

export const StyledItemLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${({ color }) => defaultTheme.colors[color]};
  background-color: ${({ backgroundColor }) => defaultTheme.colors[backgroundColor]};
  transition:all .2s;
  border-radius: 10px 0px 0px 10px;
  :hover {
    color: ${({ colorActive }) => defaultTheme.colors[colorActive]};
    text-decoration: none;
    border-radius: 10px 0px 0px 10px;
  }
  @media (max-width: 769px) {
		border-radius: 0 !important;
		height: auto;
		padding-left: 0 !important;
		padding-right: 0 !important;
		margin-right: 5px !important;
		margin-bottom: 0px !important;
		border-bottom: 3px solid ${({ color }) => defaultTheme.colors[color]} !important;
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
