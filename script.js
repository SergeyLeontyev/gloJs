// 1) Повесить на кнопку обработчик события click и реализовать такой функционал:
// 			В input[type=text] можно ввести цвет: red, green, blue и так далее.
// 			По нажатию на кнопку необходимо брать этот цвет и добавлять его свойству style="backgroundColor: " квадрата
// 			Работать должно так: ввели в input[type=text] yellow, по нажатию на кнопку значение input[type=text] попадает в свойство style="backgroundColor: yellow" и фон квадрата должен поменяться
// 2) В кружке (который внутри квадрата) есть кнопка. Дать ей свойство style="display: none; " 
// 3) Повесить на input[type=range] обработчик события input и реализовать такой функционал:
// при каждом изменении положения ползунка значение input[type=range] необходимо заносить в свойства ширины и высоты кружка (который внутри квадрата) (height и width) (в процентах!!) 

let btn = document.getElementById('btn');
let inputText = document.getElementById('text');
let square = document.getElementById('square');
let inputRange = document.getElementById('range');
let eBtn = document.getElementById('e_btn');


const func1 = function () {
	console.log(inputText.value);
	square.style.background = inputText.value;
}

const func2 = function (e) {
	square.style.height = e.target.value + '%';
	square.style.width = e.target.value + '%';
}

btn.addEventListener('click', func1);

document.addEventListener('DOMContentLoaded', () => {
	eBtn.style.display = "none";
})

inputRange.addEventListener('input', func2);




console.log(btn);
console.log(inputText);
console.log(square);
console.log(inputRange);



