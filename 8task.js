const power = (value, powerValue) => {
    let result;
    if (powerValue == 0) return 1;
    if (powerValue % 2 == 0) {
        result = power(value, powerValue / 2);
        return result * result;
    } else return value * power(value, powerValue - 1);
}

let a = 2;
console.log(power(a, 4));
console.log(a)