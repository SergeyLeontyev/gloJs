const getRandomInt = function (max) {
	return Math.floor(Math.random() * Math.floor(max));
};


const isNum = function (num) {
	return !isNaN(parseFloat(num)) && isFinite(num);
};


const start = function () {
	let randNum = getRandomInt(100);
	console.log('randNum: ', randNum);

	const play = function () {
		const number = prompt(`"Угадай число от 1 до 100" (Выйти из игры - нажать отмену) ${randNum}`);
		if (number === null) {
			alert('Игра окончена');
			return;
		}

		if (isNum(number)) {
			const num = +number;
			if (num > randNum) {
				alert('Загаданное число больше');
				play();
			} else if (num < randNum) {
				alert('Загаданное число меньше');
				play();
			} else {
				if (confirm('Поздравляю, Вы угадали!!!')) {
					start();
				} else {
					alert('Игра окончена');
					play();
				}
			}
		} else {
			alert('Введите число');
			start();
		}
	}

	play();


}

start();
