for (let i = 0; i <= 9; console.log(i++)) {}; //3

for (let i = 1; i < 21; i++) { //4
    let line = "";
    for (let j = 0; j < i; j++) {
        line += "x";
    }
    console.log(`${line}\n`);
}