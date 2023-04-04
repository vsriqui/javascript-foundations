module.exports = {  
createBirthday,
celebrateBirthday,
countBirthdays
};

function createBirthday(n,m,d) {
    birthday = {
        name: n,
        month: m,
        day: d,
    }
    return birthday
}

function celebrateBirthday(n) {
    a = n.name;
    b = n.month;
    c = n.day;

    x = `Today is ${b}/${c}! Happy birthday, ${a}!`
    return x
}

function countBirthdays(bday, m) {
    a = 0;
    for (i=0; i<bday.length; i++){
       if (bday[i].month === m) {
        console.log(x)
        a += i 
       }

    }
    return a
}