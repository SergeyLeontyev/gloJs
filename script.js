'use strict';

const title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
const screenPrice = parseInt(prompt("Сколько будет стоить данная работа?", "12000"));
const adaptive = confirm("Нужен ли адаптив?");
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = parseInt(prompt("Сколько это будет стоить?"));
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = parseInt(prompt("Сколько это будет стоить?"));
const rollback = 13 / 100;

const getAllServicePrices = function () {
	return servicePrice1 + servicePrice2;
};
const allServicePrices = getAllServicePrices();
const fullPrice = getFullPrice(screenPrice, allServicePrices);

const servicePercentPrice = getServicePercentPrices();


function getFullPrice (int1,int2){
	return int1 + int2;
}

function getTitle (title){
	let titleNew = title.trim();
	return titleNew[0].toUpperCase() + titleNew.slice(1).toLowerCase();
}

function getServicePercentPrices (){
	return Math.ceil(fullPrice - (fullPrice * rollback));
}


const showTypeOf = function (variable) {
	console.log(variable, typeof variable);
};


const getRollbakMessage = function (price) {
	if (price >= 30000) {
		return "Даём скидку в 10%";
	} else if (price < 30000 || price >= 15000) {
		return "Даём скидку в 5%";
	} else if (price < 15000 || price >= 0) {
		return "Скидка не предусмотрена";
	} else {
		return "Что то пошло не так";
	}
};


console.log(`Название сайта ${getTitle(title)}`);
showTypeOf(title);
showTypeOf(screens);
showTypeOf(adaptive);

console.log(getRollbakMessage(fullPrice));
console.log(`Общая сумма составляет ${fullPrice} рублей.`);
console.log(`Общая сумма составляет ${fullPrice} рублей.`);
console.log(`После вычета отката посреднику ${getServicePercentPrices()}`);









//function exp1(){} - function declaration - можно вызывать как перед объявлением так и после
//const exp1 = function(){} - function expression - можно вызывать только после объявления 
