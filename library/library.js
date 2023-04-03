

module.exports = { 
    issueCard,
    searchByAuthor
};


function issueCard(nam, ag, num, child) {
    var card = {
        name: nam,
        age: ag ,
        numBooksCheckedOut: num,
        isChild: child
    }
    if (num === undefined){
        card.numBooksCheckedOut = 0
    }
    if (ag < 12) {
        card.isChild = true
    } else {
        card.isChild = false
    }
    

    return card
}

function searchByAuthor (coll, x){
    var z = [];
    for (i=0; i<coll.length; i++) {
    if (coll[i].author === x ) {
    z.push(coll[i])
    }
    } 
    if (z.length === 0) {
    return 'No book found for search criteria';
    } else {
    return z;
    }
    
    }


   

