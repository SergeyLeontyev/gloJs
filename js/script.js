'use strict';

const title = document.getElementsByTagName('h1')[0].textContent;
const btnStart = document.getElementsByClassName('handler_btn')[0];
const btnReset = document.getElementsByClassName('handler_btn')[1];
const btnPlus = document.querySelector('.screen-btn');
const allOtherItems = document.querySelectorAll('.other-items');
const itemPercent = [];
const itemNumber = [];
const rollback = document.querySelector('.rollback input');
const rollSpan = document.querySelector('.rollback span');
const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalOther = document.getElementsByClassName('total-input')[2];
const totalFull = document.getElementsByClassName('total-input')[3];
const totalRollback = document.getElementsByClassName('total-input')[4];
let screens = document.querySelectorAll('.screen');

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

console.log(screens)