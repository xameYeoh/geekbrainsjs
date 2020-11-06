const isPrime = (number) => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0)
            return false;

    }
    if (number >= 1) return true;
}
let i = 0;
while (i <= 100) {
    if (isPrime(i)) console.log(i);
    i++;
}