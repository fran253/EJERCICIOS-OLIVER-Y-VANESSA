const assert = require('assert').strict;

function select(array, funcion) {
    switch (funcion) {
        case pairs:
            
            break;
        
        case gt15:
            
            break;

        case lt10:
            
            break;
    
        default:
            break;
    }
}

function pairs(values) {
    values.array.forEach(element => {
        return element % 2 === 0;
    });
}

function gt15(values) {
    values.array.forEach(element => {
        return element > 15;
    });
}

function lt10(values) {
    values.array.forEach(element => {
        return element < 10;
    });
}