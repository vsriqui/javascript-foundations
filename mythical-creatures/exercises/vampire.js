

module.exports = {
  createVampire, 
  drink, 
  findBatLovers, 
  encounterDeliciousVictim, 
  inquirePlace
}

function createVampire (name, pet) {
  return {
    name: name,
    pet: pet || 'bat',
    thirsty: true,
    ouncesDrank: 0,
  }
}

function encounterDeliciousVictim (vampire) {
  if (!vampire.thirsty){
    return `No thanks, I am too full.`
  } else {
  return 'I WANT TO SUCK YOUR BLOOD!'
}
}

function drink (vampire) {
  if (vampire.ouncesDrank < 50){
  vampire.ouncesDrank += 10;
  }
  if (vampire.ouncesDrank >= 50){
    vampire.thirsty = false;
  }
  return vampire
}

function inquirePlace (loc, place){
  for (i=0; i<loc.length; i++){
  if (loc[i] === place) {
  return `Yes, I have spent some time in ${loc[i]}.`
  } 
} 

return `No, I have never been to ${place}.`

}

function findBatLovers(array) {
  batty = [];
  for (i=0; i<array.length; i++){
    if (array[i].pet === 'bat'){
      batty.push(array[i].name)
    }
  }
  return batty
}