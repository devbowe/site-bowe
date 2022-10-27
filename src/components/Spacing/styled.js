import styled, { css } from "styled-components"

export const TrueSpaceDefault = styled.div`
  ${props => css`
    width: ${props.MaxWidth};
    margin: ${props.marginFull};
    margin-left: ${props.marginLeft};
    margin-right: ${props.marginRight};
    margin-bottom: ${props.marginBottom};
    margin-top: ${props.marginTop};
    padding: ${props.paddingFull};
    padding-left: ${props.paddingLeft};
    padding-right: ${props.paddingRight};
    padding-bottom: ${props.paddingBottom};
    padding-top: ${props.paddingTop};
  `}
  @media(max-width: 1024px) {
      padding: 40px 20px;
    }
`
export const TrueSpaceNoLeft = styled.div`
  ${props => css`
    width: ${props.MaxWidth};
    margin: ${props.marginFull};
    margin-left: ${props.marginLeft};
    margin-right: ${props.marginRight};
    margin-bottom: ${props.marginBottom};
    margin-top: ${props.marginTop};
    padding: ${props.paddingFull};
    padding-left: ${props.paddingLeft};
    padding-right: ${props.paddingRight};
    padding-bottom: ${props.paddingBottom};
    padding-top: ${props.paddingTop};
  `}
  @media(max-width: 1024px) {
      padding: 40px 20px 40px 0;
}
`
export const TrueSpaceNoRight = styled.div`
  ${props => css`
    width: ${props.MaxWidth};
    margin: ${props.marginFull};
    margin-left: ${props.marginLeft};
    margin-right: ${props.marginRight};
    margin-bottom: ${props.marginBottom};
    margin-top: ${props.marginTop};
    padding: ${props.paddingFull};
    padding-left: ${props.paddingLeft};
    padding-right: ${props.paddingRight};
    padding-bottom: ${props.paddingBottom};
    padding-top: ${props.paddingTop};
  `}
  @media(max-width: 1024px) {
      padding: 40px 0 40px 20px;

    }
`
