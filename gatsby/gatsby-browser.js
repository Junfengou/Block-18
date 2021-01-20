import React from 'react'
import Layout from "../gatsby/src/components/Layout"

function wrapPageElement({ element, props }) {
    return (
        <Layout {...props}>
            {element}
        </Layout>
    )
}

export {wrapPageElement}

