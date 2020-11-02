//пришлось прочитать объяснение в учебнике
console.log(0 > null);
console.log(0 == null); // при нестрогом равенстве null не приводится к нулю
console.log((0 === null));
console.log(0 < null);
console.log(0 >= null); // а при нестрогом равенстве null преобразуется в 0, и условие становится истинным