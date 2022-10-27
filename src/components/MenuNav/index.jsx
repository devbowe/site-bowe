import React, { useState } from "react"
import styled from "styled-components"
import NavbarLinks from "../NavbarLinks"
import Logo from "./Logo"
import { Container } from "react-bootstrap";
import { defaultTheme } from "../../styles/theme"

const Navigation = styled.nav`
	height: 10vh;
	display: flex;
	position: relative;
	margin: 0 auto;
	padding: 0 2vw;
	z-index: 2;
	align-self: center;
	@media (max-width: 768px) {
		justify-content: space-between;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		left: 0;
		z-index: 999;
		padding: 0;
	}
`
const Toggle = styled.div`
	display: none;
	height: 100%;
	cursor: pointer;
	padding: 0 1vw;
	@media (max-width: 768px) {
		display: flex;
	}
`

const Navbox = styled.div`
	display: flex;
	height: 100%;
	justify-content: flex-end;
	align-items: center;	
  	@media (max-width: 768px) {
		flex-direction: column;
		position: fixed;
		width: 100%;
		justify-content: flex-start;
		padding-top: 10vh;
		background-color: ${defaultTheme.typography.secondary};
		transition: all 0.3s ease-in;
		top: 0;
		left: ${props => (props.open ? "-110%" : "0")};
	}
	@media(max-width: 360px){
		overflow: auto;
	}
`

const Hamburger = styled.div`
	background-color: ${defaultTheme.colors.light};
	width: 30px;
	height: 3px;
	transition: all .3s linear;
	align-self: center;
	position: relative;
	z-index: 1;
	transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
	:hover {
		background-color: ${defaultTheme.colors.lightBlue};
	}
	:hover ::before,
	:hover ::after {
		background-color: ${defaultTheme.colors.lightBlue};
	}
	::before,
	::after {
		width: 30px;
		height: 3px;
		background-color: ${defaultTheme.colors.light};
		content: "";
		position: absolute;
		transition: all 0.3s linear;
	}
	::before {
		transform: ${props =>
		props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
		top: -10px;
	}
	::after {
		opacity: ${props => (props.open ? "0" : "1")};
		transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
		top: 10px;
	}
`

const BoxGroupLogo = styled.div`
	display: flex;
	width: 10%;
	@media (max-width: 360px){
		display: flex;
		justify-content: space-between;
		width: 100%;
		z-index: 3;
	}
	@media (max-width: 768px){
		display: flex;
		justify-content: space-between;
		width: 100%;
		z-index: 3;
		background-color: #222137;
		padding: 0 1rem
	}
`
const Navbar = ({ classMenuNav }) => {
	const [navbarOpen, setNavbarOpen] = useState(false)
	return (
		<Container fluid className={classMenuNav ? classMenuNav : "px-5"}>
			<Navigation>
				<BoxGroupLogo>
					<Logo />
					<Toggle
						navbarOpen={navbarOpen}
						onClick={() => setNavbarOpen(!navbarOpen)}
					>
						{navbarOpen ? <Hamburger open /> : <Hamburger />}
					</Toggle>
				</BoxGroupLogo>
				{navbarOpen ? (
					<Navbox>
						<NavbarLinks />
					</Navbox>
				) : (
						<Navbox open>
							<NavbarLinks />
						</Navbox>
					)}
			</Navigation>
		</Container>
	)
}

export default Navbar