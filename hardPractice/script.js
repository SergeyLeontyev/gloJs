let num = 266219;
let sum = 1;
let numOver = num.toString().length;

for(let i = 0; i < numOver; i++){
	sum = num.toString()[i] * sum;
}
sum **= 3;
console.log(`Возведение в степень 3 = ${sum}`);

console.log(`Вывод первых 2х чисел ресультата = "${sum.toString().substring(0,2)}"`);
