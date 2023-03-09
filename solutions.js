// Problem 1: Let’s play a mind game

function mindGame(number) {
    let result = ((((number * 3) + 10) / 2) - 5);
    return result;
}

// console.log(mindGame(50));

// Problem 2: Finding even or odd

function evenOdd(str) {
    let len = str.length;
    if (len % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

// console.log(evenOdd('Phero'));

// Problem 3: Is Less or Greater than seven

function isLGSeven(num) {
    if (Math.abs(num - 7) < 7) {
        return num - 7;
    } else {
        return num * 2;
    }
}

// console.log(isLGSeven(-15)); 
// console.log(isLGSeven(6)); 

// Problem 4: Finding Bad data

function findingBadData(arr) {
    let count = 0;
    arr.forEach(num => {
        if (num < 0) count++;
    });
    return count;
}


// Problem 5: Convert your gems into diamond

function gemsToDiamond(gems1, gems2, gems3) {
    const conversionRates = [21, 32, 43];
    const totalGems = gems1 + gems2 + gems3;
    let totalDiamonds = 0;

    for (let i = 0; i < 3; i++) {
        const diamonds = Math.floor(totalGems / conversionRates[i]);
        totalDiamonds += diamonds;
        totalGems -= diamonds * conversionRates[i];
    }

    if (totalDiamonds > 1000) {
        totalDiamonds = 2000 - totalDiamonds;
    }

    return totalDiamonds;
}
