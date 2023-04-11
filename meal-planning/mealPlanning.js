module.exports = { 
    createMeal,
    addDish,
    calculateCalories
}

function createMeal (type, calories, dish) {
    var meal = {
        type: type,
        calorieGoal: calories,
        dishes: dish,
    }
    if (!dish){
        meal.dishes = [];
    }
    return meal
}

function addDish (mealz, adish) {
    console.log(mealz)
    if (mealz.calorieGoal >= adish.calories) {
    mealz.dishes.push(adish);
    mealz.calorieGoal -= adish.calories
    }
    return mealz
    
}

function calculateCalories (ameal) {
    total = 0;
    for (i=0; i<ameal.dishes.length; i++){
        
    total += ameal.dishes[i].calories
    }
    if (ameal.type === "dinner"){
        return `dinner has a total of ${total} calories.`
    } 
    return `brunch has a total of ${total} calories.`
}
