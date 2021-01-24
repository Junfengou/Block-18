import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { GiCrossedBones } from "react-icons/gi";
import { FaBars } from "react-icons/fa";

function Nav() {
	const [click, setClick] = useState(false);

	const handleClick = () => {
		setClick(!click);
	};

	const closeMobileMenu = () => {
		setClick(false);
	};

	/*
<div className="navbar-container">
				<Link to="/" className="navbar-logo">
					Block18
				</Link>
			</div>
*/

	return (
		<NavStyles>
			<div className="navbar-container">
				<Link to="/" className="navbar-logo">
					<h4>
						<span className="letter B">B</span>
						<span className="letter l">l</span>
						<span className="letter o">o</span>
						<span className="letter c">c</span>
						<span className="letter k">k</span>
						<span className="letter i">1</span>
						<span className="letter e">8</span>
					</h4>
				</Link>
			</div>

			<div className="menu-icon" onClick={handleClick}>
				<i>{click ? <GiCrossedBones /> : <FaBars />}</i>
			</div>

			<ul className={click ? "nav-menu active" : "nav-menu"}>
				<li className="nav-item">
					<Link to="/" className="nav-link" onClick={closeMobileMenu}>
						Home
					</Link>
				</li>

				<li className="nav-item">
					<Link to="/about" className="nav-link" onClick={closeMobileMenu}>
						About
					</Link>
				</li>

				<li className="nav-item">
					<Link to="/menu" className="nav-link" onClick={closeMobileMenu}>
						Menu
					</Link>
				</li>

				<li className="nav-item">
					<Link to="/order" className="nav-link" onClick={closeMobileMenu}>
						Order
					</Link>
				</li>
			</ul>
		</NavStyles>
	);
}

const NavStyles = styled.nav`
	/* border: solid red; */
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2rem;
	position: sticky;
	height: 80px;
	z-index: 999;

	.letter {
		font-size: 1.6em;
		--scale: 1;
		--rotate: -10deg;
		--translateX: 0;
		--translateY: 0;
		--rotateX: 0deg;
		transform: scale(var(--scale)) rotate(var(--rotate))
			translateX(var(--translateX)) translateY(var(--translateY))
			rotateX(var(--rotateX));
		display: inline-block;
		line-height: 1;
		transition: transform 0.3s;

		&.B {
			/* --translateX: -0.10; */
		}

		&.l {
			--rotate: 10deg;
			--scale: 1;
			--translateX: 0.05em;
			--translateY: -0.05em;
		}

		&.o {
			--scale: 0.9;
			--rotate: -10deg;
			--translateY: 0em;
			--translateX: 0em;
		}

		&.c {
			--rotate: 12deg;
			--scale: 0.8;
			--translateX: 0em;
			--translateY: 0.1em;
		}

		&.k {
			--rotate: -12deg;
			--scale: 0.9;
			--translateX: 0em;
			--translateY: 0em;
		}

		&.i {
			--rotate: 1deg;
			--scale: 0.6;
			--translateX: 0.1em;
			--translateY: 0.2em;
			color: var(--red);
		}

		&.e {
			--rotate: 10deg;
			--scale: 0.6;
			--translateX: -0.2em;
			--translateY: 0.2em;
			color: var(--red);
		}
	}

	//-------------------

	.navbar-container {
		display: flex;
		justify-content: center;
		align-items: center;
		max-width: 1500px;
		height: 80px;
	}

	.navbar-logo {
		justify-self: start;
		cursor: pointer;
		text-decoration: none;
		font-size: 4rem;
		display: flex;
		align-items: center;
	}

	.nav-menu {
		display: grid;
		grid-template-columns: repeat(4, auto);
		gap: 3rem;
		list-style: none;
		text-align: center;
		width: 60vw;
		justify-content: end;
		margin-right: 2rem;
	}

	/* .nav-item {
		height: 80px;
	} */

	a {
		text-decoration: none;
		font-size: 2.5rem;

		&[aria-current="page"] {
			color: var(--red);
		}
	}

	.nav-links {
		display: flex;
		align-items: center;
		justify-self: center;
		padding: 0.5rem 1rem;
		height: 100%;
	}

	.menu-icon {
		display: none;
	}

	@media screen and (max-width: 960px) {
		.letter {
			font-size: 1em;
		}

		.nav-menu {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-self: center;
			width: 100%;
			height: 90vh;
			position: absolute;
			top: 50px;
			left: -100%;
			opacity: 1;
			transition: all 0.5s ease;
		}

		.nav-menu.active {
			background: var(--lightblack);
			left: 0;
			opacity: 1;
			transition: all 0.5s ease;
			z-index: 1;
		}

		.nav-links {
			text-align: center;
			padding: 2rem;
		}

		.navbar-logo {
			position: absolute;
			top: 0;
			left: 0;
			transform: translate(25%, 30%);
		}

		.menu-icon {
			display: block;
			position: absolute;
			top: 0;
			right: 0;
			transform: translate(-100%, 60%);
			font-size: 3rem;
			cursor: pointer;
		}

		.nav-item {
			/* border: solid red; */
			margin-bottom: 2rem;
			a {
				color: white;
				font-size: 4rem;
			}
		}

		.nav-links-mobile {
		}
	}
`;

export default Nav;
