const timeDay = function () {
	const date = new Date();
	const weekDay = ['Воскресенье, ', 'Понедельник, ', 'Вторник, ', 'Среда, ', 'Четверг, ', 'Пятница, ', 'Суббота, '];
	const month = [' января ', ' февраля ', ' марта ', ' апреля ', ' мая ', ' июня ', ' июля ', ' августа ', ' сентября ', ' октября ', ' ноября ', ' декабря '];

	//Функция добавления нуля во время.
	const normalizeTime = function (el) {
		if (String(el).length === 1) { return '0' + el; } else { return String(el); }
	}
	//--------------------------------

	//Фильтр склонения----------------
	const declention = function (num, el = '') {
		const outcomes = el === 'h' ? [' час ', ' часа ', ' часов '] : el === 'm' ? [' минута ', ' минуты ', ' минут '] : [' секунда ', ' секунды ', ' секунд '];
		console.log(outcomes)
		const n = num;
		return num > 4 && num < 20 ? num + outcomes[2] :
			n === 1 ? num + outcomes[0] :
				n > 1 && n < 5 ? num + outcomes[1] :
					num + outcomes[2];
	}
	//--------------------------------

	//Вывод даты и времени-------------
	const dataClock = 'Сегодня ' + weekDay[date.getDay()] + date.getDay() + month[date.getMonth()] +
		date.getFullYear() + ' года, ' + declention(date.getHours(), 'h') +
		declention(date.getMinutes(), 'm') + declention(date.getSeconds());
	//---------------------------------

	//Вывод времени-------------------
	const clock = normalizeTime(date.getDay()) + '.' + normalizeTime(date.getMonth()) + '.' + date.getFullYear() + ' - ' +
		normalizeTime(date.getHours()) + ':' + normalizeTime(date.getMinutes()) + ':' + normalizeTime(date.getSeconds());
	//--------------------------------
	console.log(clock);
	console.log(dataClock);

	const option1  = document.querySelector('.dataClock').textContent = dataClock;
	const option2  = document.querySelector('.clock').textContent = clock;

}

setInterval(timeDay, 1000)