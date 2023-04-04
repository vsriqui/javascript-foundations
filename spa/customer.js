module.exports = {  
    createCustomer,
    greeting,
    createService,
    bookServices,
    applyGiftCard
}

function createCustomer(name,bill,bookings) {
    var customer = {
        name: name,
        bill: bill,
        bookings: [],

    }
    if (bookings !== undefined) {
        customer.bookings = bookings
    }
    return customer
}

function greeting(custome){
    
    if (custome.bookings.length === 0){
    return `${custome.name}! Welcome to Happy Spa`
    } else {
    return `${custome.name}! Welcome back to Happy Spa`
    }
}

function createService(type, amt){
    var service = {
        name: type,
        cost: amt
    }
    if ((type === undefined) || (amt === undefined)) {
    return 'Please provide service name and cost.'
    } else {
    return service
    }
}

// function bookServices(custo, serv) {
//     custo.bookings.push(serv.name)
//     console.log(custo.bookings)
//     return custo
// }
function bookServices(custo, serv) {
    custo.bookings.push(serv.name)
    
    custo.bill += serv.cost
    return custo
}

function applyGiftCard(serv, p){
    console.log(serv.length)
    collect = []
    for (i=0; i<serv.length; i++){
        console.log(serv[i].price)
        if (serv[i].price <= p) {
        collect.push(serv[i].name)
        }
    }
    return collect
    }


