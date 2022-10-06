'use strict';

let title;
let screens;
let screenPrice;
let adaptive;
let service1;
let service2;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
const rollback = 13 / 100;


const isNumber = function (num) {
	console.log(num);
	return !isNaN(parseFloat(num)) && isFinite(num) && num;
}

const asking = function () {
	title = prompt("Как называется ваш проект?", "простое название");
	screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
	screenPrice = +prompt("Сколько будет стоить данная работа?");

	do {
		if (!isNumber(screenPrice)) {
			screenPrice = +prompt("Сколько будет стоить данная работа?");
		}

	} while (!isNumber(screenPrice));

	// while (!isNumber(screenPrice)) {
	// 	screenPrice = +prompt("Сколько будет стоить данная работа?");
	// };

	adaptive = confirm("Нужен ли адаптив?");
};

const getAllServicePrices = function () {
	let sum = 0;
	for (let i = 0; i < 2; i++) {

		if (i === 0) {
			service1 = prompt("Какой дополнительный тип услуги нужен?");
		} else if (i === 1) {
			service2 = prompt("Какой дополнительный тип услуги нужен?");
		}
		let sum2 = +prompt("Сколько будет стоить данная работа?");
		while (!isNumber(sum2)) {
			sum2 = +prompt("Сколько будет стоить данная работа?");
		};
		sum += sum2;
	}
	return sum;
};

function getFullPrice(int1, int2) {
	return int1 + int2;
}

function getTitle(title) {
	let titleNew = title.trim();
	return titleNew[0].toUpperCase() + titleNew.slice(1).toLowerCase();
}

function getServicePercentPrices() {
	return Math.ceil(fullPrice - (fullPrice * rollback));
}


const showTypeOf = function (variable) {
	console.log(variable, typeof variable);
};


const getRollbakMessage = function (price) {
	if (price >= 30000) {
		return "Даём скидку в 10%";
	} else if (price >= 15000 && price < 30000) {
		return "Даём скидку в 5%";
	} else if (price >= 0 && price < 15000) {
		return "Скидка не предусмотрена";
	} else {
		return "Что то пошло не так";
	}
};

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices();

showTypeOf(title);
showTypeOf(screens);
showTypeOf(adaptive);

console.log("allServicePrices", allServicePrices);
console.log(`Название сайта ${getTitle(title)}`);
console.log(getRollbakMessage(fullPrice));
console.log(`Общая сумма составляет ${fullPrice} рублей.`);
console.log(`Общая сумма составляет ${fullPrice} рублей.`);
console.log(`После вычета отката посреднику ${getServicePercentPrices()}`);









//function exp1(){} - function declaration - можно вызывать как перед объявлением так и после
//const exp1 = function(){} - function expression - можно вызывать только после объявления 
