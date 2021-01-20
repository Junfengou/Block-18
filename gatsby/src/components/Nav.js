import React from 'react'
import styled from "styled-components"


function Nav() {
    return (
        <NavStyles>
            <p>nav</p>
        </NavStyles>
    )
}

const NavStyles = styled.div`
    --lightblack: rgb(32, 33, 38);
    border: solid var(--lightblack) ;
    background: var(--lightblack);
    height: 100%;
    color: white;

`

export default Nav
