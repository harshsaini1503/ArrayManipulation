let numbers = [15, 3, 8, 1, 21];

function addNumber(array, number) {
    array.push(number);
    console.log(`After adding ${number}: [${array}]`);
}

function removeNumber(array, number) {
    const index = array.indexOf(number);
    if (index !== -1) {
        array.splice(index, 1);
        console.log(`After removing ${number}: [${array}]`);
    } else {
        console.log(`${number} not found in the array.`);
    }
}

function sortNumbers(array) {
    let sortedArray = [...array].sort((a, b) => a - b);
    console.log(`Sorted array: [${sortedArray}]`);
    return sortedArray;
}

function calculateSum(array) {
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(`Sum of numbers: ${sum}`);
    return sum;
}

function calculateAverage(array) {
    if (array.length === 0) return 0;
    const sum = calculateSum(array);
    const average = sum / array.length;
    console.log(`Average of numbers: ${average.toFixed(2)}`);
    return average;
}

console.log(`Initial array: [${numbers}]`);

addNumber(numbers, 4);

removeNumber(numbers, 3);

sortNumbers(numbers);

calculateSum(numbers);

calculateAverage(numbers);
