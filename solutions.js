// Problem 1: Let’s play a mind game

function mindGame(number) {
    if (number <= 0) {
        return "Input positive number";
    }

    let result = ((((number * 3) + 10) / 2) - 5);
    return result;
}
// Description:
// This JavaScript function is called -mindGame and takes in one parameter called -number. It first checks if the input number is less than or equal to zero, in which case it returns the string "Input positive number".

// If the input is a positive number, the function calculates a result using a mathematical formula: (((number * 3) + 10) / 2) - 5. This formula takes the input number, multiplies it by 3, adds 10, divides the result by 2, and then subtracts 5.

// The calculated result is then returned by the function.

// Problem 2: Finding even or odd

function evenOdd(string) {
    if (typeof string !== 'string') {
        return 'Error: Input must be a string';
    }
    if (string.length % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}
console.log(evenOdd('Phero'));
// Description:
// This JavaScript function is called evenOdd and takes in one parameter called string. It first checks if the input string is not a string data type, in which case it returns the string 'Error: Input must be a string'.

// If the input is indeed a string, the function checks if the length of the string is even or odd. If the length of the string is even, it returns the string 'even'. If the length of the string is odd, it returns the string 'odd'. This determines whether the string has an even or odd number of characters.

// The calculated result is then returned by the function.

// Problem 3: Is Less or Greater than seven

function isLGSeven(num) {
    if (typeof num !== 'number') {
        return 'Error: Input must be a number';
    }

    const diff = Math.abs(num - 7);
    if (diff < 7) {
        return num - 7;
    } else {
        return num * 2;
    }
}

// Description:
// This JavaScript function is called isLGSeven and takes in one parameter called num. It first checks if the input num is not a number data type, in which case it returns the string 'Error: Input must be a number'. This ensures that the input is a number before proceeding with the calculation.

// If the input is indeed a number, the function calculates the absolute difference between the input number and 7 using the Math.abs function and stores it in a variable called diff.

// If diff is less than 7, the function returns the input number minus 7. If diff is greater than or equal to 7, the function returns the input number multiplied by 2.

// The calculated result is then returned by the function.


// Problem 4: Finding Bad data

function findingBadData(arr) {
    if (!Array.isArray(arr)) {
        return "Error: input is not an array";
    }
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }
    return count;
}

// Description:
// The findingBadData() function takes an array as input and counts the number of negative elements in the array.It returns the count of negative elements, which are considered as "Bad Data". If the input is not an array, it returns an error message.

// The function uses a for loop to iterate over each element in the input array.If the element is negative, it increments the count variable.After iterating over all the elements in the array, the function returns the count.


// Problem 5: Convert your gems into diamond

function gemsToDiamond(gems1, gems2, gems3) {
    const conversionRate = [21, 32, 43];
    const totalGems = gems1 + gems2 + gems3;
    let totalDiamonds = 0;

    for (let i = 0; i < conversionRate.length; i++) {
        const diamonds = Math.floor(totalGems / conversionRate[i]);
        totalDiamonds += diamonds;
        totalGems -= diamonds * conversionRate[i];
    }

    if (totalDiamonds >= 1000) {
        const remainingDiamonds = totalDiamonds - 2000;
        return remainingDiamonds < 0 ? 0 : remainingDiamonds;
    }

    return totalDiamonds;
}

// Description:
// The gemsToDiamond() function takes in three parameters gems1, gems2, and gems3 which represent the number of gems each friend has. The function calculates the total number of diamonds that the friends can get based on the conversion rate of gems to diamonds.