function numberParts(number) {
    let numberNums = {};
    if (number > 999 || number < -999) {
        console.log('The input number is greater or less than required!');
    } else {
        numberNums['firstNum'] = Math.trunc(number / 100);
        numberNums['secondNum'] = Math.trunc(number / 10 % 10);
        numberNums['thirdNum'] = Math.trunc(number % 10);
    }
    return numberNums;
}

console.log(numberParts(123));