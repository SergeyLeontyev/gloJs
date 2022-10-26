'use strict';

document.addEventListener('DOMContentLoaded', function () {
	const px = 10;
	//Создание функции конструктора
	function DomElement(selector, height, width, bg) {
		this.selector = selector;
		this.height = height;
		this.width = width;
		this.bg = bg;
	}

	//Добавление метода в функцию конструктора DomElement
	DomElement.prototype.newElem = function () {
		let elem;

		elem = document.createElement('div');

		elem.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; position: absolute; left: ${Math.round(window.innerWidth / 2 - parseInt(this.width) / 2)}px; top: ${Math.round(window.innerHeight / 2 - parseInt(this.height) / 2)}px;`
		return elem;
	}

	//Присваивание конструктора к элементу
	let block = new DomElement('.block', 100, 100, 'black');

	//Вызов метода 
	document.body.appendChild(block.newElem());

	document.addEventListener('keydown', function (e) {
		const block = document.querySelector('div');
		console.log(e)
		if (e.key == 'ArrowUp') {
			block.style.top = parseInt(block.style.top) - px + 'px';
		}
		if (e.key == 'ArrowDown') {
			block.style.top = parseInt(block.style.top) + px + 'px';
		}
		if (e.key === 'ArrowRight') {
			block.style.left = parseInt(block.style.left) + px + 'px';
		}
		if (e.key === 'ArrowLeft') {
			block.style.left = parseInt(block.style.left) - px + 'px';
		}

	})


})