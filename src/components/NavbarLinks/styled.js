import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"
import { defaultTheme } from "../../styles/theme"

export const MenuContainer = styled.section`
  @media (max-width: 768px) {
    align-self: flex-start;
    background-color: #1c1b2c;
    width: 100%;
    overflow-x: auto;
  }

  @media (max-width: 360px) {
    width: 100%;
  }
`
export const MenuNav = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`
export const Dropdown = styled.ul`
  display: flex;
  margin-left: 2vw;
  font-size: 1.1rem;
  color: ${defaultTheme.colors.brandDarkBlue};
  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 2vh;
  }
`
export const DropdownItem = styled.li`
  color: ${defaultTheme.colors.light};
  margin: 3vh 1vw;
  /* position: relative; */
  span {
    cursor: pointer;
    margin-right: 15px;
    text-transform: lowercase;
  }
  :hover ul {
    transform: rotateX(0deg);
    opacity: 1;
    transition-timing-function: ease-out;
  }
  :hover i :before,
  :hover i :after {
    background-color: transparent;
  }
  @media (max-width: 768px) {
    display: block;
    margin: 1vh 1vw;
    span {
      cursor: pointer;
      margin-right: 15px;
      background: #222137;
      padding: 1rem;
      display: flex;
      border-radius: 0.3rem;
    }
    a {
      background: #222137;
      padding: 1rem;
      display: flex;
      border-radius: 0.3rem;
    }
  }
  @media (min-width: 1100px) {
  }
`
export const Arrow = styled.i`
  width: 10px;
  height: 10px;
  display: inline-block;
  position: relative;
  bottom: -5px;
  left: -10px;
  transition: 0.4s ease;
  margin-top: 2px;
  text-align: left;
  transform: rotate(45deg);
  float: right;
  :before,
  :after {
    position: absolute;
    content: "";
    display: inline-block;
    width: 12px;
    height: 3px;
    background-color: ${defaultTheme.colors.light};
    transition: 0.4s ease;
  }
  :after {
    position: absolute;
    transform: rotate(90deg);
    top: -5px;
    left: 5px;
  }
  @media (max-width: 900px) {
    display: none;
  }
`
export const DropdownLink = styled(AniLink)`
  color: ${defaultTheme.colors.light};
  cursor: pointer;
  text-transform: lowercase;
  :hover {
    color: ${defaultTheme.colors.light};
    padding-bottom: 5px;
    border-bottom: 3px solid ${defaultTheme.colors.brandRed};
    transition: 0.4s ease;
    text-decoration: none;
  }
  @media (max-width: 768px) {
    :hover {
      border-bottom: 0;
      color: ${defaultTheme.colors.red};
    }
  }
`
export const DropdownSubMenu = styled.ul`
  position: absolute;
  background: ${defaultTheme.colors.light};
  padding: 3rem;
  top: calc(100% + -5px);
  transform: rotateX(-90deg);
  transform-origin: top center;
  transition: all 150ms ease-in;
  opacity: 0.25s;
  border-radius: 10px;
  border-bottom: 5px solid ${defaultTheme.colors.brandRed};
  color: ${defaultTheme.colors.brandDarkBlue};
  text-align: center;
  ::after {
    border: 15px solid transparent;
    border-bottom-color: ${defaultTheme.colors.light};
    content: "";
    left: 33px;
    position: absolute;
    top: -30px;
    transform: translateX(-50%);
  }
  h2 {
    padding: 2vh 0;
    text-align: center;
    display: block;
    color: ${defaultTheme.colors.black};
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    width: 100%;
    position: relative;
    transform: translateX(0);
    background: transparent;
    padding: 0;
    margin-left: 2vw;
    text-align: left;
    border-bottom: 0;
    h2,
    ::after,
    ::before {
      display: none;
    }
    box-shadow: none;
  }
  @media (min-width: 1100px) {
    padding: 3rem;
    box-shadow: 0px 10px 18px 0px rgba(0, 0, 0, 0.6);
    min-width: 450px;
  }
`
export const DropdownSubMenuItem = styled.li`
  display: flex;
  flex-direction: column;
  a {
    font-size: 1.2rem;
    color: ${defaultTheme.colors.lightRed};
    text-transform: uppercase;
    background: none;
  }
  @media (max-width: 900px) {
    padding: 1vh 0;
    a {
      font-size: 1rem;
    }
  }
  @media (min-width: 1100px) {
    flex-direction: row;
  }
`
export const SubmenuLink = styled.ul`
  text-align: left;
  :last-child {
    padding-right: 0;
  }
  a {
    color: ${defaultTheme.colors.lightRed};
  }

  @media (max-width: 768px) {
    a {
      padding: 1rem 0 0;
      margin: 1rem;
      text-transform: uppercase;
      font-size: 1rem;
      width: 100%;
    }
  }

  @media (min-width: 1100px) {
    padding-right: 6rem;
  }
`
export const SubmenuItem = styled.li`
  margin-top: 1rem;
  a {
    display: block;
    font-size: 1.1rem;
    color: black;
    font-weight: normal;
    padding: 5px 0;
    text-transform: inherit;
    text-align: left;
  }
  @media (max-width: 768px) {
    margin-left: 2vw;
    a {
      color: ${defaultTheme.colors.light};
    }
  }
`
export const DropdownSubMenuLink = styled(AniLink)`
  color: ${defaultTheme.colors.brandDarkBlue};
  font-weight: 700;
  :hover {
    text-decoration: none;
    color: ${defaultTheme.colors.lightRed};
    transition: 0.4s ease;
  }
  @media (max-width: 768px) {
    color: ${defaultTheme.colors.light};
    display: block;
    padding: 1vh 1vw;
  }
`
