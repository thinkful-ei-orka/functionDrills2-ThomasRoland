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

function rockPaperScissors(num) {
    const randomNo = Math.floor(Math.random() * 3) + 1;
    if (num === randomNo) return "it's a tie";
    if (num === 1) {
        if (randomNo === 3) {
            return "you win";
        } else {return "you lose";}
    } 
    if (num === 2) {
        if (randomNo === 1) {
        return "you win";
    } else {return "you lose";
        }
    }
    if (num === 3) {
        if (randomNo === 2) {
            return "you win";
        } else {return "you lose";}
    }
    throw "no number found";
}

// 1 > 3 > 2 > 1
//check number of input
//if input === randomnu

// return its a tie
//if input === 1
//if randomNo === 3
    //return 'you win'
//else return you lose
//if input === 2 
//if randomnu === 1
// return you win
//else return you lose
//if input ===3
//if randomnu ==2
//you win
//else return you lose

//throw 'no number found'


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
// console.log(daysInAMonth('haha'));
console.log(rockPaperScissors(1));
