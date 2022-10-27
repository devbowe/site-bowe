import styled, {css} from 'styled-components';

export const StyledImg = styled.img`
    width: 70%;
    height: 100%;
@media(max-width: 2000px){
  width: 100%;
  height: 100%;
}

${({sensitiveImg}) => sensitiveImg && css`
margin-bottom: -10%;
@media(max-width: 3000px){
  margin-bottom: -25%;
}
@media(max-width: 1600px){
  margin-bottom: -30%;
}
@media(max-width: 1280px){
  margin-bottom: -55%;
}
@media(max-width: 1024px){
  margin-bottom: -90%;
}
@media(max-width: 1024px){
  margin-bottom: -25%;
}
@media(max-width: 420px){
  margin-bottom: -40%;
  margin-top: 3rem;
}
`}
`
