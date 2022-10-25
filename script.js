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

const mainTotal = document.querySelector('.main-total');
const mainControl = document.querySelector('.main-controls');
const mainInput = mainTotal.querySelectorAll('input[type=text]');
const mainCheckbox = mainControl.querySelectorAll('input[type=checkbox]');


const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
let fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];

let screensElement = document.querySelectorAll('.screen');

let i = 0;
const appData = {
	title: '',
	screensValue: [],
	screenPrice: 0,
	adaptive: true,
	rollbackUser: 0,
	servicePricesPercent: 0,
	servicePricesNumber: 0,
	fullPrice: 0,
	servicePercentPrice: 0,
	servicesPercent: {},
	servicesNumber: {},

	init: function () {
		appData.addTitle();
		appData.start();
		btnStart.addEventListener('click', appData.calc);
		btnReset.addEventListener('click', appData.reset);
		btnPlus.addEventListener('click', appData.addScreenBlock);
		rollInput.addEventListener('input', appData.addRoll);
	},

	validate: function () {
		let newScreens = document.querySelectorAll('.screen');
		let hasValue = true;
		newScreens.forEach((item) => {
			let valueSelect = item.querySelector('select').value;
			let valueInput = item.querySelector('input').value;
			console.log(valueSelect)
			if (valueSelect == 0 || valueInput == '' || valueInput.match(/^[ ]+$/)) {
				hasValue = false;
			}
		})
		return hasValue;
	},


	calc: function () {
		if (!appData.validate()) {
			return;
		}
		appData.addScreens();
		appData.addServices();
		appData.addPrices();
		appData.showResult();
		appData.deActive();
	},

	reset: function () {
		btnStart.style.display = "block";
		btnReset.style.display = "none";
		this.title = '';
		this.screensValue = Array();
		this.screenPrice = 0;
		this.adaptive = true;
		this.rollbackUser = 0;
		this.servicePricesPercent = 0;
		this.servicePricesNumber = 0;
		this.fullPrice = 0;
		this.servicePercentPrice = 0;
		this.servicesPercent = {};
		this.servicesNumber = {};
		mainInput.forEach((item) => {
			item.value = 0;
		});
		mainCheckbox.forEach((item) => {
			item.disabled = false;
		});
		let screensElement = document.querySelectorAll('.screen');
		screensElement.forEach((item, index) => {
			const select = item.querySelector('select');
			const input = item.querySelector('input');
			select.disabled = false;
			input.disabled = false;
			select.value = 0;
			input.value = '';
			if (index !== 0) {
				screensElement[index].remove();
			}
		})
		rollInput.disabled = false;
	},

	deActive: function () {
		mainCheckbox.forEach((item) => {
			item.disabled = true;
		});
		let screensElement = document.querySelectorAll('.screen');
		screensElement.forEach((item) => {
			const select = item.querySelector('select');
			const input = item.querySelector('input');
			select.disabled = true;
			input.disabled = true;
		})
		btnStart.style.display = "none";
		btnReset.style.display = "block";
		rollInput.disabled = true;
	},


	addTitle: function () {
		document.title = title;
	},

	start: function () {
		appData.addScreens();
	},

	showResult: function () {
		total.value = appData.screenPrice;
		totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
		fullTotalCount.value = appData.fullPrice;
	},

	addRoll: function () {
		rollSpan.textContent = rollInput.value + '%';
		appData.rollback = rollInput.value / 100;
	},

	//Добавление типа экрана
	addScreens: function () {
		let screensElement = document.querySelectorAll('.screen');
		screensElement.forEach((screen, index) => {
			const select = screen.querySelector('select');
			const input = screen.querySelector('input');
			const selectName = select.options[select.selectedIndex].textContent;
			appData.screensValue.push({
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
		const cloneScreen = screensElement[0].cloneNode(true);
		screensElement[screensElement.length - 1].after(cloneScreen)
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
		for (let screen of appData.screensValue) {
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
		totalCountRollback.value = +appData.rollbackUser
	},


	getServicePercentPrices: function () {
		appData.servicePercentPrice = Math.ceil(appData.fullPrice - (appData.fullPrice * appData.rollback));
	},
};


appData.init();