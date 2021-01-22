import React from 'react'
import Layout from "../gatsby/src/components/Layout"
import { BurgerProvider } from './src/components/context/BurgerOrderContext'

function wrapPageElement({ element, props }) {
    return (
        <Layout {...props}>
            {element}
        </Layout>
    )
}

export {wrapPageElement}



export function wrapRootElement({ element }) {
    return <BurgerProvider>{element}</BurgerProvider>
}