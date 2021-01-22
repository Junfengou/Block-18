import React, { useState } from 'react'

const BurgerContext = React.createContext();

export function BurgerProvider({children}) {
    const [order, setOrder] = useState([])

    return <BurgerContext.Provider value={[order, setOrder]}>
        {children}
    </BurgerContext.Provider>
}

export default BurgerContext;
