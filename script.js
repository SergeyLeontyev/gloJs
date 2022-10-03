'use strict';

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
let screenPrice = parseInt(prompt("Сколько будет стоить данная работа?", "12000"));
let adaptive = confirm("Нужен ли адаптив?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = parseInt(prompt("Сколько это будет стоить?"));
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = parseInt(prompt("Сколько это будет стоить?"));
let rollback = 13;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback / 100)));

console.log(title);
console.log(screens);
console.log(screenPrice);
console.log(adaptive);
console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);
console.log(rollback);
console.log(`Общая сумма составляет ${fullPrice} рублей.`);
console.log(`После вычета отката посреднику ${servicePercentPrice}`);


if(fullPrice >= 30000 ){
	servicePercentPrice = screenPrice - (servicePercentPrice *= 0.1);
	console.log(`Стоимость услуги с учетом скидки в 10% составляет ${servicePercentPrice} рублей.`);
} else if(fullPrice < 30000 || fullPrice >= 15000){
	servicePercentPrice = screenPrice - (servicePercentPrice *= 0.05);
	console.log(`Стоимость услуги с учетом скидки в 5% составляет ${servicePercentPrice} рублей.`);
} else if(fullPrice < 15000 || fullPrice >= 0){
	console.log('Скидка не предусмотрена');
} else {
	console.log('Что то пошло не так');
}


