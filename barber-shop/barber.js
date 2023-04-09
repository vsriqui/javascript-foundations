module.exports = {  
createBarber,
giveCompliment,
cutHair
};

function createBarber(name, earnings, haircuts){
   
    var x = {
        name: name,
        earnings: earnings,
        haircuts: haircuts,
        
    }
    if (!x.haircuts) {
        x.haircuts = []
    }
    if (!x.earnings) {
        x.earnings = 0
    }

    return x
}



function giveCompliment(cut){
    console.log(cut)
    
    return `This ${cut.style} looks great!`
}
// need to iterate
function cutHair(cut, a){
    console.log(cut)
    console.log(a)
    
    return cut.haircuts.length 
}