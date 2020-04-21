'use strict';

function jediName(firstName, lastName) {
    let name = '';
    name = `${lastName.slice(0,3)}${firstName.slice(0,2)}`;
    return name;
}

/*

    function beyond (num) {
        if num is infinite,
        console log "and beyond"
        if else num > 0,
        console log "to infinity"
        if else num < 0,
        cosnole log "to negative infinity"
        else
        console log "staying home"
    }

*/

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

//Test functions
console.log(jediName('Kevin', 'Bacon'));
console.log(beyond(Infinity));