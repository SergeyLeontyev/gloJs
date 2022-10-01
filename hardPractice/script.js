let num = 266219;
let sum = 1;


for(let i = 0; i < num.toString().length; i++){
	sum = num.toString()[i] * sum;
}
sum **= 3;
console.log(`Возведение в степень 3 = ${sum}`);

console.log(`Вывод первых 2х чисел ресультата = "${sum.toString().substring(0,2)}"`);
