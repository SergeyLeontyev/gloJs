let arr = [];
for (let i = 0; i < 5; i++) {
	let arrItem = prompt('Введите число');
	arr.push(arrItem);
}

console.log(arr);

arr.forEach(item => {
	if (item[0] === "2" || item[0] === "4") {
		console.log(item);
	}
});



const number = function (el) {
	let arr = [];
	if (el !== 1) {
		arr.push(1);
		for (let j = 2; j * j <= el; j++) {
			if (el % j === 0) {
				arr.push(j);
			}
		}
	}
	arr.push(el);
	return arr;
};

for (let i = 1; i <= 100; i++) {
	const n = number(i);
	if (n.length <= 2) {
		console.log(`${i}: Делители этого числа: ${n.join(', ')}`);
	}
}


