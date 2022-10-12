'use strict';

let h1 = document.getElementsByTagName('h1')[0].textContent;
let btnAll = document.getElementsByClassName('handler_btn');
let btnPlus = document.querySelector('.screen-btn');
let allOtherItems = document.querySelectorAll('.other-items');
let itemPercent = [];
let itemNumber = [];
let rollback = document.querySelector('.rollback input');
let rollSpan = document.querySelector('.rollback span');
let totalInput = document.getElementsByClassName('total-input');
let screens = document.querySelectorAll('.screen');

let totalInputArr = function () {
	for (let i = 0; i < totalInput.length; i++){
		console.log(totalInput[i]);
	}
};
totalInputArr();

const sort = function () {
	allOtherItems.forEach((item) => {
		if (item.classList.contains('percent')){
			itemPercent.push(item);
		} else {
			itemNumber.push(item);
		}
	})
}
sort();

console.log(allOtherItems);
console.log(itemPercent);
console.log(itemNumber);
console.log(rollback);
console.log(rollSpan);
console.log(totalInput);
console.log(screens);







// const isNumber = function (num) {
// 	return !isNaN(parseFloat(num)) && isFinite(num) && num;
// }

// let i = 0;
// const appData = {
// 	title: '',
// 	screens: [],
// 	screenPrice: 0,
// 	adaptive: true,
// 	rollback: 13 / 100,
// 	allServicePrices: 0,
// 	fullPrice: 0,
// 	servicePercentPrice: 0,
// 	services: {},

// 	start: function () {
// 		appData.asking();
// 		appData.addPrices();
// 		appData.getFullPrice();
// 		appData.getServicePercentPrices();
// 		appData.getTitle();
// 		appData.prodInfo();
// 		appData.logger();

// 	},

// 	getTitle: function () {
// 		appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
// 	},

// 	asking: function () {
// 		appData.title = prompt("Как называется ваш проект?", "простое название").trim();

// 		while (isNumber(appData.title) || appData.title === '' || appData.title === undefined) {
// 			appData.title = prompt("Как называется ваш проект?", "простое название").trim();
// 		};


// 		for (let i = 0; i < 2; i++) {
// 			let name = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
// 			let price = 0;

// 			while (isNumber(name) || name === '' || name === undefined) {
// 				name = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные").trim();
// 			};

// 			do {
// 				if (!isNumber(price)) {
// 					price = prompt("Сколько будет стоить данная работа?");
// 				}
// 			} while (!isNumber(price));
// 			appData.screens.push({ id: i, name: name, price: +price });
// 		}

// 		for (let i = 0; i < 2; i++) {
// 			let name = prompt("Какой дополнительный тип услуги нужен?").trim();
// 			let price = 0;

// 			while (isNumber(name) || name === '' || name === undefined) {
// 				name = prompt("Какой дополнительный тип услуги нужен?").trim();
// 			};

// 			while (!isNumber(price)) {
// 				price = prompt("Сколько будет стоить данная работа?");
// 			};

// 			appData.services[`${name}${i}`] = +price;
// 		}

// 		appData.adaptive = confirm("Нужен ли адаптив?");
// 	},

// 	addPrices: function () {
// 		appData.screenPrice = appData.screens.reduce(function (sum, item) {
// 			return sum + item.price;
// 		}, 0);

// 		for (let key in appData.services) {
// 			appData.allServicePrices += appData.services[key];
// 		}
// 	},


// 	getFullPrice: function () {
// 		appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
// 	},

// 	getServicePercentPrices: function () {
// 		appData.servicePercentPrice = Math.ceil(appData.fullPrice - (appData.fullPrice * appData.rollback));
// 	},

// 	prodInfo: function () {
// 		console.log("allServicePrices", appData.allServicePrices);
// 		console.log(`Название сайта ${appData.getTitle(appData.title)}`);
// 		console.log(appData.getRollbakMessage(appData.fullPrice));
// 		console.log(`Общая сумма составляет ${appData.fullPrice} рублей.`);
// 		console.log(`После вычета отката посреднику ${appData.servicePercentPrice} рубля`);
// 	},



// 	getRollbakMessage: function (price) {
// 		if (price >= 30000) {
// 			return "Даём скидку в 10%";
// 		} else if (price >= 15000 && price < 30000) {
// 			return "Даём скидку в 5%";
// 		} else if (price >= 0 && price < 15000) {
// 			return "Скидка не предусмотрена";
// 		} else {
// 			return "Что то пошло не так";
// 		}
// 	},
// 	logger: function () {
// 		console.log(appData.screenPrice);
// 	}

// };



// appData.start();