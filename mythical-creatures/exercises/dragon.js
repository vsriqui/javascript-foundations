

module.exports = {
  createDragon, 
  greetRider,  
 eat, 
  findFireBreathers
}

function createDragon(name, rider, temper) {
  return {
    name: name,
    rider: rider,
    temperment: temper,
    timesEaten: 0,
    hungry: true,
  }
}

function greetRider(drag) {
  return `Hi, ${drag.rider}!`
}

function eat(drag) {
  if (drag.timesEaten <3){
    drag.timesEaten += 1
  }
  if (drag.timesEaten >=3){
    drag.hungry = false
  }
  return drag
}

function findFireBreathers(array) {
  dragArray = [];
  for (i=0; i<array.length; i++){
    if (array[i].temperment === 'aggressive'){
      dragArray.push(array[i])
    }
  }
  return dragArray
}