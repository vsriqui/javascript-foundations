module.exports = {  
    createElevator,
    changeFloors,
    dropOffPassenger
};

function createElevator(building, floor, currentF, passengers){
    return {
        building: building,
        floors: floor,
        currentFloor: currentF,
        passengers: passengers
    }
}

function changeFloors(elevator, floor){
    if (elevator.floors < floor) {
        return `Floor ${floor} does not exist!`
    } else if (elevator.currentFloor === floor){
        return `You\'re already on floor ${floor}!`
    } else {
    return `Taking you to floor ${floor}!`
    }
}

function dropOffPassenger (elevator, person){
    console.log(person)
    for (i=0; i<elevator.passengers.length; i++) {
    if (elevator.passengers[i] === person){
        elevator.passengers.splice(i, 1);
    }
    }
    return elevator.passengers
}