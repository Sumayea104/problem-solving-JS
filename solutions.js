// Problem 1: Let’s play a mind game

function mindGame(number) {
    if (number <= 0) {
        return "Input positive number";
    }

    let result = ((((number * 3) + 10) / 2) - 5);
    return result;
}


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
    
    if (num >= 7) {
      return num * 2;
    } 
    else {
      return num - 7;
    }
  }
  
  console.log(isLGSeven(6)); // Output: -1
  console.log(isLGSeven(-15)); // Output: -22
  console.log(isLGSeven(15)); // Output: 30

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
