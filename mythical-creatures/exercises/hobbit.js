

module.exports = {
  createHobbit, 
  celebrateBirthday, 
  getRing, 
  meetPeople, 
  // findFriends
}

function createHobbit(nam, ag) {
  var hobbitses =  {
  name: nam,
  age: ag,
  isAdult: false,
  isOld: false,
  acquaintances: []
 }
 

 
 if (hobbitses.age === undefined){
  hobbitses.age = 0;
 }
 if (hobbitses.name === undefined) {
  hobbitses.name = 'unknown'
 }


 return hobbitses
}

function celebrateBirthday (bday) {
  
  
  bday.age += 1;
  if (bday.age <= 32){
    bday.isAdult = false;
   } else if (bday.age>32){
    bday.isAdult = true
   }
   if (bday.age >= 101){
    bday.isOld = true
   }
 
 
   return bday
}

function getRing(who) {
  
  if (who.name === 'Frodo'){
    x = 'Here is the ring!'
  } else {
    x = 'You can\'t have it!'
  }
  return x
}

function meetPeople(bilbo, people){
  
  for (i=0; i<people.length; i++){
    bilbo.acquaintances.push(people[i])
    console.log(bilbo)
    console.log(people[i])
  
  
  }
  
  return bilbo
}

