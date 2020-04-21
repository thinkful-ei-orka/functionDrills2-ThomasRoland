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
    // input word
    // index =
    // switch word[0]
    // a = 2
    // b=3
    // c = 4
    // d = 5
    //default === space
     // return word[index]
    let index = "";
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
let words = 'craft block argon meter bells brown croon droop';
//Test functions
console.log(jediName('Kevin', 'Bacon'));
console.log(beyond(Infinity));
let array = words.split(" ");
for (let i =0; i < 8; i++) {
    console.log(decode(array[i]));
}


