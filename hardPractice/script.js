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
	const declention = function (num, el = ''){

		const outcomes = (el === 'h' ? ['час', 'часа', 'часов'] : el === 'm' ? [' минута ', ' минуты ', ' минут '] : [' секунда ', ' секунды ', ' секунд ']);
	}
//--------------------------------

//Вывод времени-------------------
	const clock = normalizeTime(date.getDay()) + '.' + normalizeTime(date.getMonth()) + '.' + date.getFullYear() + ' - ' +
		normalizeTime(date.getHours()) + ':' + normalizeTime(date.getMinutes()) + ':' + normalizeTime(date.getSeconds()); 
//--------------------------------
	console.log(clock);
}

setInterval(timeDay, 1000)