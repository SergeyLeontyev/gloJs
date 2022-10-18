'use strict';

const title = document.getElementsByTagName('h1')[0].textContent;
const btnPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

const rollInput = document.querySelector('.rollback input');
const rollSpan = document.querySelector('.rollback span');

const btnStart = document.getElementsByClassName('handler_btn')[0];
const btnReset = document.getElementsByClassName('handler_btn')[1];

let count = 0;

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
let fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];

let screens = document.querySelectorAll('.screen');

let i = 0;
const appData = {
	title: '',
	screens: [],
	screenPrice: 0,
	adaptive: true,
	rollback: 0,
	servicePricesPercent: 0,
	servicePricesNumber: 0,
	fullPrice: 0,
	servicePercentPrice: 0,
	servicesPercent: {},
	servicesNumber: {},

	init: function () {
		appData.addTitle();
		btnStart.addEventListener('click', appData.start);
		// btnStart.disabled = true;
		btnStart.addEventListener('click', appData.addRes)
		btnPlus.addEventListener('click', appData.addScreenBlock);
		rollInput.addEventListener('input', appData.addRoll);
	},

	addTitle: function () {
		document.title = title;
	},

	addRes: function () {
		screens.forEach((item) => {
			console.log(screens)
		})
	},

	start: function () {
		appData.addScreens();
		appData.addServices();
		appData.addPrices();
		console.log(appData);
		appData.showResult();
	},

	showResult: function () {
		total.value = appData.screenPrice;
		totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
		fullTotalCount.value = appData.fullPrice;
	},

	addRoll: function () {
		rollSpan.textContent = rollInput.value + '%';
		appData.rollback = rollInput.value / 100;
		console.log(appData.rollback)

	},

	//Добавление типа экрана
	addScreens: function () {
		let screens = document.querySelectorAll('.screen');
		screens.forEach((screen, index) => {
			const select = screen.querySelector('select');
			const input = screen.querySelector('input');
			const selectName = select.options[select.selectedIndex].textContent;
			appData.screens.push({
				id: index,
				name: selectName,
				price: +select.value * +input.value,
				count: input.value
			});
			count += +input.value
		})
		totalCount.value = count
	},

	//Дублирование блока "тип экрана"
	addScreenBlock: function () {
		const cloneScreen = screens[0].cloneNode(true);
		screens[screens.length - 1].after(cloneScreen)
	},

	//Добавление услуг
	addServices: function () {
		otherItemsPercent.forEach(function (item) {
			const check = item.querySelector('input[type=checkbox]');
			const label = item.querySelector('label');
			const input = item.querySelector('input[type=text]');
			if (check.checked) {
				appData.servicesPercent[label.textContent] = +input.value;
			}
		});
		otherItemsNumber.forEach(function (item) {
			const check = item.querySelector('input[type=checkbox]');
			const label = item.querySelector('label');
			const input = item.querySelector('input[type=text]');
			if (check.checked) {
				appData.servicesNumber[label.textContent] = +input.value;
			}
		});
	},

	addPrices: function () {
		for (let screen of appData.screens) {
			appData.screenPrice += +screen.price;
		}
		for (let key in appData.servicesNumber) {
			appData.servicePricesNumber += +appData.servicesNumber[key];
		}
		for (let key in appData.servicesPercent) {
			appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
		}
		appData.fullPrice = +appData.screenPrice + appData.servicePricesPercent + appData.servicePricesNumber;
		appData.rollbackUser = +appData.fullPrice - (appData.fullPrice * appData.rollback);
		totalCountRollback.value = appData.rollbackUser
	},


	getServicePercentPrices: function () {
		appData.servicePercentPrice = Math.ceil(appData.fullPrice - (appData.fullPrice * appData.rollback));
	},
};


appData.init();