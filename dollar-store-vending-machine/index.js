module.exports = {
    createItemStock,
    makePurchase,
    collectChange
}

function createItemStock (name, quantity, price){
    var vending = {
        name: name || "unknown",
        quantity: quantity || 0,
        price: price || 1,
    }
    // if (!vending.name){
    //     vending.name = "unknown"
    // }
    // if (!vending.quantity){
    //     vending.quantity = 0
    // }
    // if (!vending.price) {
    //     vending.price = 1
    // }

    return vending
}

function makePurchase (item, money) {
    console.log(item)
    if (item.price > money) {
        return `Sorry, you need at least $${item.price} to make that purchase`
    }
    if (item.quantity < 1) {
        return 'Sorry, there are none left'
    } else {
        return `Here are your ${item.name}`
    }

}
function collectChange (loose) {
    var combined = 0;
    for (i=0; i<loose.length; i++) {
    combined += loose[i]
    }
    return combined
}
