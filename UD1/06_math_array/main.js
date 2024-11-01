// Declarar un array numérico (entero) y crear un método que imprima:
// La suma de todos los elementos
// El elemento más grande
// El elemento más pequeño
// La media de los elementos

function doCalculation(array) {
    const sum = array.reduce((acc, num) => acc + num, 0);
    const max = Math.max(...array);
    const min = Math.min(...array);
    const average = sum / array.length;

    console.log('Suma de todos los elementos:', sum);
    console.log('Elemento más grande:', max);
    console.log('Elemento más pequeño:', min);
    console.log('Media de los elementos:', average);
    console.log('---------------------------');
}

doCalculation([1, 2, 3, 4]);
doCalculation([5, 5, 5, 5]);
doCalculation([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5]);
