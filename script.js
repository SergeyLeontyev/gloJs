'use strict';

const isNumber = function (num) {
	return !isNaN(parseFloat(num)) && isFinite(num) && num;
}
let i = 0;
const appData = {
	title: '',
	screens: '',
	screenPrice: 0,
	adaptive: true,
	rollback: 13 / 100,
	allServicePrices: 0,
	fullPrice: 0,
	servicePercentPrice: 0,
	service1: '',
	service2: '',

	getTitle: function () {
		return appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
	},

	asking: function () {
		appData.title = prompt("Как называется ваш проект?", "простое название");
		appData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
		do {
			if (!isNumber(appData.screenPrice)) {
				appData.screenPrice = prompt("Сколько будет стоить данная работа?");
			}
		} while (!isNumber(appData.screenPrice));
		appData.adaptive = confirm("Нужен ли адаптив?");
	},
	getAllServicePrices: function () {
		let sum = 0;
		for (let i = 0; i < 2; i++) {
			if (i === 0) {
				appData.service1 = prompt("Какой дополнительный тип услуги нужен?");
			} else if (i === 1) {
				appData.service2 = prompt("Какой дополнительный тип услуги нужен?");
			}
			let sum2 = +prompt("Сколько будет стоить данная работа?");
			while (!isNumber(sum2)) {
				sum2 = +prompt("Сколько будет стоить данная работа?");
			};
			sum += sum2;
		}
		return sum;
	},

	getFullPrice: function () {
		return +appData.screenPrice + appData.allServicePrices;
	},

	getServicePercentPrices: function () {
		return Math.ceil(appData.fullPrice - (appData.fullPrice * appData.rollback));
	},

	prodInfo: function () {
		console.log("allServicePrices", appData.allServicePrices);
		console.log(`Название сайта ${appData.getTitle(appData.title)}`);
		console.log(appData.getRollbakMessage(appData.fullPrice));
		console.log(`Общая сумма составляет ${appData.fullPrice} рублей.`);
		console.log(`После вычета отката посреднику ${appData.getServicePercentPrices()} рубля`);
	},

	start: function () {
		this.asking();
		this.allServicePrices = this.getAllServicePrices();
		this.fullPrice = this.getFullPrice(this.screenPrice, this.allServicePrices);
		this.servicePercentPrice = this.getServicePercentPrices();
		this.title = this.getTitle();
		this.prodInfo();
		this.logger();

	},

	getRollbakMessage: function (price) {
		if (price >= 30000) {
			return "Даём скидку в 10%";
		} else if (price >= 15000 && price < 30000) {
			return "Даём скидку в 5%";
		} else if (price >= 0 && price < 15000) {
			return "Скидка не предусмотрена";
		} else {
			return "Что то пошло не так";
		}
	},
	logger: function () {
		for (let position in appData) {
			i++;
			console.log(`Свойство № ${i} = ${position}`);
		}
	}

};



appData.start();



