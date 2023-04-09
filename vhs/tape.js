module.exports = {  
    createTape,
    reset,
    createCollection,
}


function createTape(title, readytoplay){
    return {
        title: title,
        readyToPlay: readytoplay,
    }
}

function reset(tape){
    tape.readyToPlay = true
    return tape
}

function createCollection(collectionAdd){
    array = [];
    console.log(collectionAdd)
    for (i=0; i<collectionAdd.length; i++) {
    array.push(collectionAdd[i].title)  
    }
    if (array.length<1){   
    return "Your collection is empty"
    }      
    
    
    return array
}