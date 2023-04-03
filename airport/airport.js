
function createAirport(n, a, g) {
  var airport = {
    name: n,
    airlines: a,
    availableGates: g,
    


  }


  return airport
}

function welcomeGuests(air) {
  return `Welcome to ${air.name}!`
  
}

function landPlanes(airpor, landing) {
  if (airpor.availableGates > landing){
  airpor.availableGates -= landing
  return `Success! Current availability is ${airpor.availableGates}.`
  }
  else if (airpor.availableGates <= landing){
    landing -= airpor.availableGates
    overflow = landing
    airpor.availableGates = 0
    return `Oh no! Not enough gates available. Current overflow is ${overflow}.`
  }
}


module.exports = { 
  createAirport, 
  welcomeGuests, 
  landPlanes, 
  // checkAirlineLocations
};
