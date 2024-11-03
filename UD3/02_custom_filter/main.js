const assert = require('assert').strict;

function select(array, condition) {
    return array.filter(condition);
}

// Condiciones
function pairs(value) {
    return value % 2 === 0;
}

function gt15(value) {
    return value > 15;
}

function lt10(value) {
    return value < 10;
}

let values = [1, 2, 3, 5, 7, 13, 17, 23, 29];

// pares
assert.deepStrictEqual(select(values, pairs), [2]);

//  +15
assert.deepStrictEqual(select(values, gt15), [17, 23, 29]);

// +10
assert.deepStrictEqual(select(values, lt10), [1, 2, 3, 5, 7]);

console.log("Todas las pruebas pasaron correctamente.");
