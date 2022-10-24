'use strict';

const title = document.getElementsByTagName('h1')[0].textContent;
const btnPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

const rollInput = document.querySelector('.rollback input');
const rollSpan = document.querySelector('.rollback span');

const btnStart = document.getElementsByClassName('handler_btn')[0];
const btnReset = document.getElementsByClassName('handler_btn')[1];

let screensElement = document.querySelectorAll('.screen');
let count = 0;

let total = document.getElementsByClassName('total-input')[0];
let totalCount = document.getElementsByClassName('total-input')[1];
let totalCountOther = document.getElementsByClassName('total-input')[2];
let fullTotalCount = document.getElementsByClassName('total-input')[3];
let totalCountRollback = document.getElementsByClassName('total-input')[4];

const cmsVariable = document.querySelector('.hidden-cms-variants');
const cms = document.querySelector('.cms');
let cmsOpen = cms.querySelector('input[type=checkbox]');
let hiddenInput = cmsVariable.querySelector('.main-controls__input');
let cmsSelect = cms.querySelector('#cms-select');
let inputCount = hiddenInput.querySelector('input[type=text]');



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
		this.addTitle();
		this.start();
		btnStart.addEventListener('click', this.calc);
		btnReset.addEventListener('click', this.reset);
		btnPlus.addEventListener('click', this.addScreenBlock);
		rollInput.addEventListener('input', this.addRoll);
	},

	validate: function () {
		let newScreens = document.querySelectorAll('.screen');
		let hasValue = true;
		newScreens.forEach((item) => {
			let valueSelect = item.querySelector('select').value;
			let valueInput = item.querySelector('input').value;

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
		btnStart.style.display = 'none';
		btnReset.style.display = 'block';
		let allInputCheckbox = document.querySelectorAll('input[type=checkbox]');
		let allInputText = document.querySelectorAll('input[type=text]');
		let allInputSelect = document.querySelectorAll('select');
		let allInputRange = document.querySelectorAll('input[type=range]');
		allInputCheckbox.forEach((item) => {
			item.disabled = true;
		})
		allInputText.forEach((item) => {
			item.disabled = true;
		})
		allInputSelect.forEach((item) => {
			item.disabled = true;
		})
		allInputRange.forEach((item) => {
			item.disabled = true;
		})
		btnPlus.disabled = true;
		appData.addScreens();
		appData.addServices();
		appData.addPrices();
		appData.showResult();
	},

	reset: function () {
		btnStart.style.display = 'block';
		btnReset.style.display = 'none';
		this.title = '';
		this.screensValue = [];
		this.screenPrice = 0;
		this.adaptive = true;
		this.rollbackUser = 0;
		this.servicePricesPercent = 0;
		this.servicePricesNumber = 0;
		this.fullPrice = 0;
		this.servicePercentPrice = 0;
		this.servicesPercent = {};
		this.servicesNumber = {};
		let allInput = document.querySelectorAll('input[type=checkbox]');
		allInput.checked = false;
		total.value = 0;
		totalCount.value = 0;
		totalCountOther.value = 0;
		fullTotalCount.value = 0;
		totalCountRollback.value = 0;
		btnPlus.disabled = false;
		otherItemsPercent.forEach((item) => {
			let check = item.querySelector('input[type=checkbox]');
			check.checked = false;
		})
		otherItemsNumber.forEach((item) => {
			let check = item.querySelector('input[type=checkbox]');
			check.checked = false;
		})
		otherItemsPercent.forEach((item) => {
			let check = item.querySelector('input[type=checkbox]');
			check.disabled = false;
		})
		otherItemsNumber.forEach((item) => {
			let check = item.querySelector('input[type=checkbox]');
			check.disabled = false;
		})
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
		cmsOpen.disabled = false;
		cmsOpen.checked = false;
		cmsVariable.disabled = false;
		cmsVariable.style.display = "none";
		hiddenInput.style.display = "none"
		cmsVariable.querySelector('select').disabled = false;
		cmsVariable.querySelector('select').value = '';
		cmsVariable.querySelector('input').disabled = false;
		cmsVariable.querySelector('input').value = '';
	},

	openCms: function () {
		cmsOpen.addEventListener('change', (event) => {
			let target = event.target;
			console.log(target.checked);
			if (target.checked) {
				cmsVariable.style.display = "flex";
			} else {
				hiddenInput.querySelector('input[type=text]').value = '';
				cmsSelect.value = '';
				cmsVariable.style.display = "none";
				hiddenInput.style.display = "none";
			}
		});

		cmsSelect.addEventListener('change', (e) => {
			let target = event.target;
			if (target.value == 'other') {
				hiddenInput.style.display = "block";
			} else {
				hiddenInput.style.display = "none";
			}
		})
		console.log(cmsOpen.checked);
	},

	addTitle: function () {
		document.title = title;
	},

	start: function () {
		this.addScreens();
		this.openCms();
	},

	showResult: function () {
		total.value = this.screenPrice;
		totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber;
		fullTotalCount.value = this.fullPrice;
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
			this.screensValue.push({
				id: index,
				name: selectName,
				price: +select.value * +input.value,
				count: input.value
			});
			count += +input.value
		})
		console.log();
		totalCount.value = count
	},

	//Дублирование блока "тип экрана"
	addScreenBlock: function () {
		const cloneScreen = screensElement[0].cloneNode(true);
		screensElement[screensElement.length - 1].after(cloneScreen)
	},

	//Добавление услуг
	addServices: function () {
		otherItemsPercent.forEach((item) => {
			const check = item.querySelector('input[type=checkbox]');
			const label = item.querySelector('label');
			const input = item.querySelector('input[type=text]');
			if (check.checked) {
				this.servicesPercent[label.textContent] = +input.value;
			}
		});
		otherItemsNumber.forEach((item) => {
			const check = item.querySelector('input[type=checkbox]');
			const label = item.querySelector('label');
			const input = item.querySelector('input[type=text]');
			if (check.checked) {
				this.servicesNumber[label.textContent] = +input.value;
			}
		});
	},

	addPrices: function () {
		for (let screen of this.screensValue) {
			this.screenPrice += +screen.price;
		}
		for (let key in this.servicesNumber) {
			this.servicePricesNumber += +this.servicesNumber[key];
		}
		for (let key in this.servicesPercent) {
			this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100);
		}

		if (cmsSelect.value == 50) {
			this.fullPrice = +this.screenPrice + this.servicePricesPercent + this.servicePricesNumber + ((+this.screenPrice + this.servicePricesPercent + this.servicePricesNumber) * 0.5);
		} else if (cmsSelect.value == 'other') {
			this.fullPrice = +this.screenPrice + this.servicePricesPercent + this.servicePricesNumber + ((+this.screenPrice + this.servicePricesPercent + this.servicePricesNumber) * (inputCount / 100));
		} else {
			this.fullPrice = +this.screenPrice + this.servicePricesPercent + this.servicePricesNumber
		}


		this.rollbackUser = +this.fullPrice - (this.fullPrice * this.rollback);
		totalCountRollback.value = Math.round(+this.rollbackUser);
	},


	getServicePercentPrices: function () {
		this.servicePercentPrice = Math.ceil(this.fullPrice - (this.fullPrice * this.rollback));
	},
};


appData.init();