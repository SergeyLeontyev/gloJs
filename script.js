"use strict";

const title = document.getElementsByTagName("h1")[0].textContent;
const btnPlus = document.querySelector(".screen-btn");
const otherItemsPercent = document.querySelectorAll(".other-items.percent");
const otherItemsNumber = document.querySelectorAll(".other-items.number");

const rollInput = document.querySelector(".rollback input");
const rollSpan = document.querySelector(".rollback span");

const btnStart = document.getElementsByClassName("handler_btn")[0];
const btnReset = document.getElementsByClassName("handler_btn")[1];

let count = 0;

const mainTotal = document.querySelector(".main-total");
const mainControl = document.querySelector(".main-controls");
const mainInput = mainTotal.querySelectorAll("input[type=text]");
const mainCheckbox = mainControl.querySelectorAll("input[type=checkbox]");

const total = document.getElementsByClassName("total-input")[0];
const totalCount = document.getElementsByClassName("total-input")[1];
const totalCountOther = document.getElementsByClassName("total-input")[2];
let fullTotalCount = document.getElementsByClassName("total-input")[3];
const totalCountRollback = document.getElementsByClassName("total-input")[4];

const cmsVariable = document.querySelector('.hidden-cms-variants');
const cms = document.querySelector('.cms');
let cmsOpen = cms.querySelector('input[type=checkbox]');
let hiddenInput = cmsVariable.querySelector('.main-controls__input');
let cmsSelect = cms.querySelector('#cms-select');
let inputCount = hiddenInput.querySelector('input[type=text]');

let screensElement = document.querySelectorAll(".screen");

let i = 0;
const appData = {
	title: "",
	screensValue: [],
	screenPrice: 0,
	adaptive: true,
	rollback: 0,
	// rollbackUser: 0,
	servicePricesPercent: 0,
	servicePricesNumber: 0,
	fullPrice: 0,
	servicePercentPrice: 0,
	servicesPercent: {},
	servicesNumber: {},

	init: function () {
		this.addTitle();
		this.start();
		btnStart.addEventListener("click", this.calc);
		btnReset.addEventListener("click", this.reset);
		btnPlus.addEventListener("click", this.addScreenBlock);
		rollInput.addEventListener("input", this.addRoll);
	},

	validate: function () {
		let newScreens = document.querySelectorAll(".screen");
		let hasValue = true;
		newScreens.forEach((item) => {
			let valueSelect = item.querySelector("select").value;
			let valueInput = item.querySelector("input").value;
			console.log(valueSelect);
			if (valueSelect == 0 || valueInput == "" || valueInput.match(/^[ ]+$/)) {
				hasValue = false;
			}
		});
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
		// appData.getServicePercentPrices();
	},

	reset: function () {
		btnStart.style.display = "block";
		btnReset.style.display = "none";
		btnPlus.disabled = false;
		appData.title = "";
		appData.screensValue = [];
		appData.screenPrice = 0;
		appData.adaptive = true;
		// appData.rollback = 0;
		// appData.rollbackUser = 0;
		appData.servicePricesPercent = 0;
		appData.servicePricesNumber = 0;
		appData.fullPrice = 0;
		appData.servicePercentPrice = 0;
		appData.servicesPercent = {};
		appData.servicesNumber = {};
		count = 0;
		mainInput.forEach((item) => {
			item.value = 0;
		});
		mainCheckbox.forEach((item) => {
			item.disabled = false;
		});
		let screensElement = document.querySelectorAll(".screen");

		screensElement.forEach((item, index) => {
			const select = item.querySelector("select");
			const input = item.querySelector("input");
			select.disabled = false;
			input.disabled = false;
			select.value = 0;
			input.value = "";
			if (index !== 0) {
				screensElement[index].remove();
			}
		});
		rollInput.disabled = false;
		cmsOpen.disabled = false;
		cmsOpen.checked = false;
		cmsVariable.disabled = false;
		cmsVariable.style.display = "none";
		hiddenInput.style.display = "none"
		cmsVariable.querySelector('select').disabled = false;
		cmsVariable.querySelector('select').value = '';
		cmsVariable.querySelector('input').disabled = false;
		cmsVariable.querySelector('input').value = '';
		cmsSelect.disabled = false;
		inputCount.disabled = false;
	},

	deActive: function () {
		mainCheckbox.forEach((item) => {
			item.disabled = true;
		});
		let screensElement = document.querySelectorAll(".screen");
		screensElement.forEach((item) => {
			const select = item.querySelector("select");
			const input = item.querySelector("input");
			select.disabled = true;
			input.disabled = true;
		});
		btnStart.style.display = "none";
		btnReset.style.display = "block";
		btnPlus.disabled = true;
		rollInput.disabled = true;
		cmsSelect.disabled = true;
		inputCount.disabled = true;
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
			let target = e.target;
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
		totalCountOther.value =
			this.servicePricesPercent + this.servicePricesNumber;
		fullTotalCount.value = this.fullPrice;
	},

	addRoll: function () {
		rollSpan.textContent = rollInput.value + "%";
		this.rollback = rollInput.value / 100;
		console.log(this.rollback);
	},

	//Добавление типа экрана
	addScreens: function () {
		let screensElement = document.querySelectorAll(".screen");
		screensElement.forEach((screen, index) => {
			const select = screen.querySelector("select");
			const input = screen.querySelector("input");
			const selectName = select.options[select.selectedIndex].textContent;
			input.addEventListener('keydown', function (e) {
				console.log(e)
				if ((!isNaN(parseFloat(e.key)) && isFinite) || e.key == 'Backspace' || e.key == 'Delete') {
				} else {
					e.preventDefault();
					return false;
				}
			});
			this.screensValue.push({
				id: index,
				name: selectName,
				price: +select.value * +input.value,
				count: input.value,
			});

			count += +input.value;
		});
		totalCount.value = count;
	},

	//Дублирование блока "тип экрана"
	addScreenBlock: function () {
		const cloneScreen = screensElement[0].cloneNode(true);
		screensElement[screensElement.length - 1].after(cloneScreen);
	},

	//Добавление услуг
	addServices: function () {
		otherItemsPercent.forEach(function (item) {
			const check = item.querySelector("input[type=checkbox]");
			const label = item.querySelector("label");
			const input = item.querySelector("input[type=text]");
			if (check.checked) {
				appData.servicesPercent[label.textContent] = +input.value;
			}
		});
		otherItemsNumber.forEach(function (item) {
			const check = item.querySelector("input[type=checkbox]");
			const label = item.querySelector("label");
			const input = item.querySelector("input[type=text]");
			if (check.checked) {
				appData.servicesNumber[label.textContent] = +input.value;
			}
		});
	},

	addPrices: function () {
		this.addRoll();
		for (let screen of this.screensValue) {
			this.screenPrice += +screen.price;
		}
		for (let key in this.servicesNumber) {
			this.servicePricesNumber += +this.servicesNumber[key];
		}
		for (let key in this.servicesPercent) {
			this.servicePricesPercent +=
				this.screenPrice * (this.servicesPercent[key] / 100);
		}

		if (cmsSelect.options[cmsSelect.selectedIndex].value == 50) {
			this.fullPrice = +this.screenPrice + this.servicePricesPercent + this.servicePricesNumber + ((+this.screenPrice + this.servicePricesPercent + this.servicePricesNumber) * 0.5);
			console.log('1')
		} else if (cmsSelect.options[cmsSelect.selectedIndex].value == 'other') {
			this.fullPrice = +this.screenPrice + this.servicePricesPercent + this.servicePricesNumber + ((+this.screenPrice + this.servicePricesPercent + this.servicePricesNumber) * (inputCount.value / 100));
			console.log('2')
		} else {
			this.fullPrice = +this.screenPrice + this.servicePricesPercent + this.servicePricesNumber
			console.log('3')
		}

		this.rollbackUser = +this.fullPrice - (this.fullPrice * this.rollback);

		totalCountRollback.value = Math.ceil(+this.rollbackUser);
	},

};

appData.init();