module.exports = {  
createBarber,
giveCompliment,
cutHair,
listStyles
};

function createBarber(name, earnings, haircuts){
   var barber = {
    name: name,
    earnings: earnings,
    haircuts: haircuts,
   } 
   if (!haircuts) {
    barber.haircuts = [];
   }
   if (!earnings) {
    barber.earnings = 0
   }
   return barber
}

function giveCompliment(cut) {

    return `This ${cut.style} looks great!`
}

function cutHair (barber, cut) {
    barber.haircuts.push(cut)
    barber.earnings += cut.price
    return barber
}


function listStyles (name, length) {
    styl = [];
    
    for (i=0; i<name.haircuts.length; i++) {
    if (name.haircuts[i].hairLength === length) {
        console.log(name.haircuts[i].style)
        styl.push(name.haircuts[i].style)
    }
}
    return styl
}