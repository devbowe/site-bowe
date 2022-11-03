import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const SpacingMenuNav = styled.div`
  padding: 40px 50px;
  @media (max-width: 1024px) {
    padding: 40px 0px;
  }
`

export const ContextBanner = styled.div`
  h2,
  p {
    @media (max-width: 769px) {
      width: 100%;
      text-align: center;
    }
  }
`

export const Img = styled.span`
  img {
    width: 600px;
    @media (max-width: 1600px) {
      width: 500px;
    }
    @media (max-width: 1280px) {
      margin-top: 20px;
      width: 400px;
    }
    @media (max-width: 768px) {
      margin-left: -400px;
    }
    @media (max-width: 540px) {
      margin-left: -120px;
    }
    @media (max-width: 320px) {
      width: 250px;
      margin-left: -50;
    }
  }
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-right: 400px;
  @media (max-width: 1600px) {
    margin-right: 0px;
    width: 40%;
  }
  @media (max-width: 1280px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`

export const ContextBox = styled.div`
  justify-content: center;
  text-align: left;
  h1 {
    width: 50%;
    @media (max-width: 1440px) {
      width: 60%;
    }
    @media (max-width: 768px) {
      margin-top: 10%;
      width: 100%;
    }
  }
  h2,
  h3,
  h4,
  h5 {
    width: 85%;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
  h6 {
    width: 85%;
    @media (max-width: 1440px) {
      width: 80%;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`

export const BoxButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  @media (max-width: 375px) {
    width: 100%;
    padding-left: 0;
  }
`

export const BoxSession2 = styled.div`
  width: 45%;
  margin-right: 200px;
  @media (max-width: 1600px) {
    margin-right: 0px;
    width: 60%;
  }
  @media (max-width: 1280px) {
    width: 60%;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`
export const Session2button = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`

export const BoxSession3 = styled.div`
  width: 45%;
  margin-left: 200px;
  @media (max-width: 1600px) {
    margin-left: 200px;
    width: 60%;
  }
  @media (max-width: 1024px) {
    margin-left: 50px;
    width: 90%;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 0;
    width: 100%;
  }
`

export const Session3button = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  @media (max-width: 1500px) {
    width: 100%;
  }
  @media (max-width: 1024px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    display: flex;
    width: 100%;
  }
  @media (max-width: 420px) {
    justify-content: center;
  }
`
export const BoxSession4 = styled.div`
  width: 50%;
  margin-right: 200px;
  @media (max-width: 1600px) {
    margin-right: 200px;
    width: 60%;
  }
  @media (max-width: 1280px) {
    margin-right: 80px;
    width: 60%;
  }
  @media (max-width: 1024px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 0;
    width: 100%;
  }
`

export const Session4button = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 40%;
  @media (max-width: 1500px) {
    width: 50%;
  }
  @media (max-width: 1024px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    display: flex;
    width: 100%;
  }
`

export const SessionVideo = styled.div`
  video {
    width: 30vw;
    max-height: 440px;
    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
      margin-top: 20px;
      width: 100%;
    }
  }
`

export const ImgMen = styled.span`
  position: relative;
  display: flex;
  width: 40%;
  img {
    width: 20vw;
    position: absolute;
    bottom: -19rem;
    left: 7rem;
    @media (max-width: 1024px) {
      margin-bottom: -40px;
      width: 60vw;
      padding: 20px 0 17px 0;
    }
    @media (max-width: 768px) {
      margin-left: -200px;
      bottom: -40rem;
    }
    @media (max-width: 540px) {
      margin-left: -160px;
      bottom: -27.7rem;
    }
    @media (max-width: 375px) {
      bottom: -19.8rem;
    }
    @media (max-width: 320px) {
      width: 250px;
      margin-left: -50;
    }
  }
`

export const CustomSpacing = styled.div`
  padding: 6rem;
  @media (max-width: 1500px) {
    padding: 100px 100px;
  }
  @media (max-width: 1280px) {
    padding: 100px 30px;
  }
  @media (max-width: 550px) {
    padding: 3.5rem 2rem;
  }
`
export const TriangleImg = styled.div`
  img {
    width: 400px;
    @media (max-width: 1500px) {
      width: 500px;
    }
    @media (max-width: 1280px) {
      width: 450px;
    }
    @media (max-width: 768px) {
      margin-top: 50px;
    }
    @media (max-width: 768px) {
      width: 300px;
    }
    @media (max-width: 320px) {
      width: 260px;
    }
  }
`

export const BoxText = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  margin-left: 300px;
  h1 {
    width: 56%;
    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
    }
  }
  @media (max-width: 1500px) {
    margin-left: 300px;
  }
  @media (max-width: 1024px) {
    margin-left: 100px;
  }
  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
  }
`

export const Session8 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

export const Session8Img = styled.div`
  img {
    width: 400px;
    @media (max-width: 1280px) {
      width: 250px;
    }
    @media (max-width: 1024px) {
      padding-top: 40px;
      width: 200px;
      position: relative;
      margin-left: 790px;
    }
    @media (max-width: 768px) {
      width: 150px;
      margin-left: 590px;
    }
    @media (max-width: 540px) {
      width: 150px;
      margin-left: 370px;
    }
    @media (max-width: 414px) {
      width: 150px;
      margin-left: 240px;
    }
    @media (max-width: 375px) {
      width: 150px;
      margin-left: 200px;
    }
    @media (max-width: 360px) {
      width: 150px;
      margin-left: 190px;
    }
    @media (max-width: 360px) {
      width: 150px;
      margin-left: 150px;
    }
    @media (max-width: 280px) {
      width: 150px;
      margin-left: 110px;
    }
  }
`

export const BoxSession8 = styled.div`
  h2 {
    width: 58%;
    @media (max-width: 1280px) {
      width: 70%;
    }
    @media (max-width: 1024px) {
      width: 80%;
    }
    @media (max-width: 1024px) {
      width: 100%;
    }
  }
`
export const StyleHorseContainer = styled.div`
  padding-block: 4rem;
  background-position: top right;
  background-repeat: no-repeat;
  background-image: url(${({ troiaHorse }) => troiaHorse});
  background-size: contain;
  @media (max-width: 1100px) {
    background: none;
  }
`
export const FlexCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  > h2,
  h6 {
    width: 50%;
    @media (max-width: 1600px) {
      width: 80%;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`
export const VideoWrapper = styled.video`
  outline: none;
  width: 700px;
  height: 400px;
  border: 1px solid transparent;
  border-radius: 10px;
  @media (max-width: 1500px) {
    width: 500px;
    height: 300px;
  }
  @media (max-width: 1024px) {
    width: 500px;
    height: 300px;
  }
  @media (max-width: 414px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 375px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 321px) {
    width: 250px;
    height: 300px;
  }
  :focus {
    outline: none;
  }
`

export const PrimaryButton = styled(AniLink)`
  padding: 5px 20px;
  color: #ffffff;
  border: 1px solid;
  background: #f11f45;
  border-radius: 20px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  width: fit-content;
  transition: all ease 0.6s;
  :hover {
    background: #e1244f;
    border-color: #e1244f;
    color: #ffffff;
    cursor: pointer;
    text-decoration: none;
    border: 1px solid;
  }
`
