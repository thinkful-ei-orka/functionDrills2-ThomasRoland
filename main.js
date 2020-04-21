'use strict';

function jediName(firstName, lastName) {
    let name = '';
    name = `${lastName.slice(0,3)}${firstName.slice(0,2)}`;
    return name;
}


function beyond(num) {
    if (num === Infinity || num === -Infinity) {
        console.log('And beyond');
    } else if (num > 0) {
        console.log('To infinity');
    } else if (num < 0) {
        console.log('To negative infinity');
    } else {
        console.log('Staying home');
    }
}

function decode(word) {

    let index = '';
    switch (word[0]) {
    case 'a':
        index = 1;
        break;
    case 'b':
        index = 2;
        break;
    case 'c':
        index = 3;
        break;
    case  'd':
        index = 4;
        break;
    default:
        return ' ';
    }
    return word[index];
}

//How many days in a month
//taking in month, leap year
//switch (month)
//return days in month
//(jan mar may >july aug< oct dec)
//return month has 31 days
//(feb(not really) apr jun sep nov)
//return month has 30 days
//if feb, check leap year
//default is 'needs a month'

function daysInAMonth(month, leapYear) {
    switch(month) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
        return `${month} has 31 days`;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
        return `${month} has 30 days`;
    case 'February':
        if(leapYear) {
            return `${month} has 29 days`;
        } else {
            return `${month} has 28 days`;
        }
    default:
        throw 'Must provide a valid month.';
    }
}



//Test functions
console.log(jediName('Kevin', 'Bacon'));
console.log(beyond(Infinity));

let words = 'craft block argon meter bells brown croon droop';
let decodedWord = '';
let array = words.split(" ");
for (let i =0; i < 8; i++) {
    decodedWord += decode(array[i]);
}
console.log(decodedWord);
console.log(daysInAMonth('January'));
console.log(daysInAMonth('February', true));
console.log(daysInAMonth('haha'));

