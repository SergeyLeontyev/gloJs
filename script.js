'use strict';

const title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
const screenPrice = parseInt(prompt("Сколько будет стоить данная работа?", "12000"));
const adaptive = confirm("Нужен ли адаптив?");
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = parseInt(prompt("Сколько это будет стоить?"));
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = parseInt(prompt("Сколько это будет стоить?"));
const rollback = 13;
const fullPrice = screenPrice + servicePrice1 + servicePrice2;
const servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback / 100)));

console.log(title);
console.log(screens);
console.log(adaptive);
console.log(`Общая сумма составляет ${fullPrice} рублей.`);
console.log(`Общая сумма составляет ${fullPrice} рублей.`);
console.log(`После вычета отката посреднику ${servicePercentPrice}`);


if(fullPrice >= 30000 ){
	servicePercentPrice = Math.ceil(screenPrice - (servicePercentPrice *= 0.1));
	console.log(`Стоимость услуги с учетом скидки в 10% составляет ${servicePercentPrice} рублей.`);
} else if(fullPrice < 30000 || fullPrice >= 15000){
	servicePercentPrice = Math.ceil(screenPrice - (servicePercentPrice *= 0.05));
	console.log(`Стоимость услуги с учетом скидки в 5% составляет ${servicePercentPrice} рублей.`);
} else if(fullPrice < 15000 || fullPrice >= 0){
	console.log('Скидка не предусмотрена');
} else {
	console.log('Что то пошло не так');
}






//function exp1(){} - function declaration - можно вызывать как перед объявлением так и после
//const exp1 = function(){} - function expression - можно вызывать только после объявления 
