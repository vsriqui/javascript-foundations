module.exports = { 
    createFavoriteFood,
    commentOnSpiciness,
    orderFood,
    createShoppingList,
};

function createFavoriteFood(dish) {
    var x = {
        name: dish.dish,
        ingredients: dish.ingredients,
        isSpicy: dish.isSpicy,
        timesOrdered: 0,
    }
    return x
}

function commentOnSpiciness(dishz) {
    if (dishz.isSpicy) {
        return `Wow, this ${dishz.name} is so spicy!`
    } else {
        return `Phew, this ${dishz.name} is not very spicy.`
    }
}

function orderFood(ordered){
    ordered.timesOrdered += 1
    return ordered
}

function createShoppingList(food1) {
    list = [];
    for (i=0; i<food1.length; i++){
      
     list = list.concat(food1[i].ingredients)
        
    }
    return list
}