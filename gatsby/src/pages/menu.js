import React from 'react'
import Menu from "../components/Menu/Menu"
import styled from "styled-components"
import { graphql } from "gatsby"

function menu({ data: { burgers } }) {
    const burgerList = burgers.nodes;
    return (
        <>
        <MenuWrapper >
            <h1>Menu</h1>
        </MenuWrapper>
            <MenuGridStyles>
                {burgerList.map(burger => <Menu key={burger._id} burger={burger} />)}
            </MenuGridStyles>
        </>
    )
}

export default menu


const MenuWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;

    h1 {
        width: 20rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--lightblack);
        color: white;
        border-radius: 20px;
    }
    
`

const MenuGridStyles = styled.div`
  display: grid;
  /* grid-template-columns: repeat(2, minmax(300px, 500px)); */
  grid-template-columns: repeat(auto-fill, minmax(300px, 500px));
  /* grid-template-rows: repeat(2, minmax(300px, 1fr)); */
  grid-auto-rows: 500px 500px 500px;
  justify-content: center;
  align-items: center;
  margin-top: 4em;
  gap: 10rem;

  

  @media(max-width:900px)
  {
    grid-auto-rows: 450px 450px 450px;
  }
`;

export const query = graphql`
    query MenuItems {
        burgers: allSanityMenu {
            nodes {
                _id
                name
                slug {
                    current
                }
                price
                description
                image {
                    asset {
                        fluid(maxWidth: 400)
                        {
                            ...GatsbySanityImageFluid 
                        }
                    }
                }
            }
        }
    }
`