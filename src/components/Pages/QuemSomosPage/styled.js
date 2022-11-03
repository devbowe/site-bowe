import styled from "styled-components"
import { defaultTheme } from "../../../styles/theme"

export const ProvisionalSpace = styled.div`
  background-color: white;
  padding: 500px 0 0 0;
`

export const QuemSomosWrapper = styled.div`
  background: ${defaultTheme.colors.brandDarkBlue};
  .layout {
    border-radius: 0;
    background: ${defaultTheme.colors.brandDarkBlue};
  }
  .title-blocks-img {
    background: ${defaultTheme.colors.light};
  }
`
export const SlideWrapper = styled.div`
  .carrosel {
    background: white;
    padding: 2.5rem 2rem;
    border-radius: 20px;
    min-height: 250px;

    @media (max-width: 900px) {
      min-height: 200px;
    }

    h2 {
      font-size: 30px;
      margin-bottom: 2vh;
      span {
        display: block;
        font-size: 28px;
        color: red;
      }
    }

    span {
      text-align: left;
      font-size: 16px;
      font-weight: 400;
    }

    .carousel-indicators {
      top: calc(100% + 20px);
      li.active {
        background: red;
        width: 16px;
        border-radius: 5px;
      }
    }
  }
`
export const HistoryWrapper = styled.div`
  height: auto;
  width: 100%;
  background: white;
  align-items: center;
`
export const Outpartners = styled.div`
  background: ${defaultTheme.colors.light};
  padding-left: 3vw;
  @media screen and (min-width: 1300px) {
    padding: 6rem;
  }
  @media screen and (max-width: 770px) {
    padding: 4rem;
  }

  @media screen and (max-width: 420px) {
    padding: 2rem;
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
