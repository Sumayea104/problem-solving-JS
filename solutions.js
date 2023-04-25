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
