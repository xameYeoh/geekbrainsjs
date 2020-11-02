//5
const add = (a, b) => {
    return (Number(a) + Number(b));
}

const subtract = (a, b) => {
    return (Number(a) - Number(b));
}

const multiply = (a, b) => {
    return (Number(a) * Number(b));
}

const divide = (a, b) => {
    return (Number(a) / Number(b));
}
//6
const mathOperation = (arg1, arg2, operation) => {
    switch (operation) {
        case 'add': {
            return (add(arg1, arg2));
        }
        case 'subtract': {
            return (subtract(arg1, arg2));
        }
        case 'multiply': {
            return (multiply(arg1, arg2));
        }
        case 'divide': {
            return (divide(arg1, arg2));
        }
        default:
            break;
    }

}

let c = mathOperation(1, 3, 'add');
console.log(c);