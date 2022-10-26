'use strict';

//Создание функции конструктора
function DomElement (selector, height, width, bg, fontSize){
	this.selector = selector;
	this.height = height;
	this.width = width;
	this.bg = bg;
	this.fontSize = fontSize;
}

//Добавление метода в функцию конструктора DomElement
DomElement.prototype.newElem = function (){
	let elem;
	if(this.selector[0] == '#'){
		elem = document.createElement('div');
		elem.className = this.selector.slice(1);
	} 
	if(this.selector[0] == '.'){
		elem = document.createElement('p');
		elem.id = this.selector.slice(1);
	}
	elem.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px;`
	return elem;
}

//Присваивание конструктора к элементу
let div = new DomElement('.block', 100, 200, 'purple', 12);
let p = new DomElement('#p', 150, 400, 'black', 12);

//Вызов метода 
document.body.appendChild(div.newElem());
document.body.appendChild(p.newElem());
