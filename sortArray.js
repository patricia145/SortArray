function sortArray() {

    let numbersInput = prompt("Enter the numbers separated by commas: (e.g. 24, 65, 21, 5, 9, 32, 42, 80, 57)");
    let namesInput = prompt("Enter the names separated by commas: (e.g. Zenvo, Erica, Jordie, Alicia, Redon)");


    let numbers = numbersInput.split(',').map(Number);
    let names = namesInput.split(',');

    let mergedArray = numbers.concat(names);


    console.log("Merged Array: ", mergedArray);

    let sortedNumbers = numbers.sort((a, b) => b - a);
    console.log("Sorted Numbers in Reverse: ", sortedNumbers);

    let sortedNames = names.sort();
    console.log("Sorted Names Alphabetically: ", sortedNames);
            

}