const getRandomInt = function (max) {
	return Math.floor(Math.random() * Math.floor(max));
};


const isNum = function (num) {
	return !isNaN(parseFloat(num)) && isFinite(num);
};


const start = function () {
	let randNum = getRandomInt(100);
	let attempt = 2;
	console.log('randNum: ', randNum);

	const play = function () {
		attempt--;

		if (attempt < 0) {
			if (confirm('Попытки закончились, хотите сыграть еще?')) {
				start();
			} else {
				alert('До свидания');
				return;
			}
		} else {
			const number = prompt(`"Угадай число от 1 до 100" (Выйти из игры - нажать отмену) ${randNum}`);
			if (number === null) {
				alert('Игра окончена');
				return;
			}

			if (isNum(number)) {
				const num = +number;
				if (num > randNum) {
					alert(`Загаданное число больше, осталось попыток ${attempt}`);
					play();
				} else if (num < randNum) {
					alert(`Загаданное число меньше, осталось попыток ${attempt}`);
					play();
				} else {
					if (confirm('Поздравляю, Вы угадали!!!')) {
						start();
					} else {
						alert('Игра окончена');
					}
				}
			} else {
				alert('Введите число');
				play();
			}
		}
	}

	play();


}

start();
