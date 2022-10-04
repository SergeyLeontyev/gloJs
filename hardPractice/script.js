const string = function (arg) {
	let res = 'Введите текст, а не число';
	if (typeof arg === "string") {
					const maxLength = 30;
					const str = arg.trim();
					if (str.length > maxLength) {
									res = str.substr(0,maxLength) + '...';
					} else {
									res = str;
					}
	}
	return res;
};

console.log('string(): ', string(3));
console.log('string(): ', string('    Строка менее 30 символов     '));
console.log('string(): ', string('    Строка более 30 символов - ну очень при очень длинная строчка получилась!'));