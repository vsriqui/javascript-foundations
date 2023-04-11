module.exports = { 
createMeal,
getMade,
announceMeal,
createOrder,
cookMeal,
listOrders
};

function createMeal(name, specialRequests, tableNumber) {
    return {
        name: name,
        specialRequests: specialRequests,
        tableNumber: tableNumber,
        complete: false,
    }

}

function getMade (meal) {
    
    meal.complete = true;
    return meal
}

function announceMeal (meal) {
    if (meal.complete){
        return `Order up - ${meal.name} for table 4!`
    } else {
        return 'This Margarita pizza is not completed yet'
    }

}

function createOrder (order) {
   return {
    tableNumber: order.tableNumber,
    meals: order.meals,
    completedMeals: []
   }
    

}

function cookMeal (mealz, order) {
    
    if (mealz.tableNumber === order.tableNumber) {

    
    mealz.completedMeals.push(order.name)
    }
    
    return mealz
}

function listOrders(order) {
    console.log(order)
    orderN = [];
    for (i=0; i<order.meals.length; i++){
        orderN.push(order.meals[i].name)
    }
    return orderN
}

