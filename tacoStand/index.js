
module.exports = {
    createIngredient,
    createTaco,
    addIngredientToTaco,
    calculatePrice,
}

function createIngredient (name, price) {
    return {
        name: name || 'unknown',
        price: price || 0,
    }
}

function createTaco (name, ingredients) {
    return {
        name: name || 'custom',
        ingredients: ingredients || [],
    }
}

function addIngredientToTaco (taco, ingredient) {
    taco.ingredients.push(ingredient)
    return taco
}

function calculatePrice (taco) {
    finalPrice = 0;
    for (i=0; i<taco.ingredients.length; i++) {
    finalPrice += taco.ingredients[i].price
    }
    return finalPrice
}