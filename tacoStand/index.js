
module.exports = {
    createIngredient,
    createTaco,
    // addIngredientToTaco
}

function createIngredient(meat, price) {
    var ingredient = {
        name: meat,
        price: price
    }
    if (meat === undefined) {
        ingredient.name = 'unknown';
    }
    if (price === undefined) {
        ingredient.price = 0.00
    }
    return ingredient;
}

function createTaco(name, filling) {
    var taco = {
        name: name,
        ingredients: filling
    }
    if (name === undefined) {
        taco.name = 'custom'
    }
    if (filling === undefined) {
        taco.ingredients = [];
    }
    return taco;    
}

// function addIngredientToTaco(taco, ingredient) {}