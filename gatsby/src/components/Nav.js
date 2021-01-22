import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components"


function Nav() {
    return (
        <NavStyles>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/order">Order</Link></li>
            </ul>
        </NavStyles>
    )
}

const NavStyles = styled.nav`
    --lightblack: rgb(32, 33, 38);
    border: solid var(--lightblack) ;
    background: var(--lightblack);
    height: 100%;
    color: white;

    ul {
        /* border: solid red; */
        display: flex;
        justify-content: space-around;
        list-style-type: none;
        
    }
    a {
        color: white;
        text-decoration: none;
    }
`

export default Nav
