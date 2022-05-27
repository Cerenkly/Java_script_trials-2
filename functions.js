'use strict';

// 1. isHometown

function isHometown(town){
    return town==='San Francisco';
}

// 2. getFullName


    function createPerson(firsttName, lastNAme){
        return {
            firstName: firstNAme,
            lastNAme: lastname,
            getFulName(){
                return firstName+ ' '+ this.lastName;
            },
        };    
    }
// 

// 3. calculateTotal

function calculateTotal(basePrice, state, tax=0.05){

    const subtotal = basePrice * (1 + tax);
    const fee = 0;
    if (state == "CA"){
        fee = 0.03 * subtotal;
    }
    else if (state == "PA"){
        fee = 2;
    }
    else if (state == "MA"){
        if (base_price <= 100){
            fee = 1;
        }
        else {
            fee = 3;
        }
    }
    newTotal= subtotal + fee
}
    return newTotal





// Define your function here
