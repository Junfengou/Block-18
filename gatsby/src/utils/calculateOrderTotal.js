

// take a array of order and reduce down to a single number
function calculateOrderTotal( order, burgers ) {
    // loop over each items in the order
    
    const total = order.reduce((runningTotal, singleOrder) => {
        // const burger = burgers.find( singleBurger => singleBurger._id === singleOrder._id)
        return runningTotal + singleOrder.price;
    }, 0)
    return total;
}

export default calculateOrderTotal