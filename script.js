// 1 Сортировать книги

const books = document.querySelector('.books');
const allBook = document.querySelectorAll('.book');

const arr = Object.keys(allBook).sort((prev, next) => {
	if (allBook[prev].firstElementChild.innerText > allBook[next].firstElementChild.innerText) {
		return 1;
	}
	if (allBook[prev].firstElementChild.innerText < allBook[next].firstElementChild.innerText) {
		return -1;
	}

});

for (let i = 0; i < arr.length; i++) {
	books.appendChild(allBook[arr[i]]);
}


// 2 Заменить фон

document.querySelector('body').style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

// 3 Удалить рекламу

const adv = document.querySelector('.adv').remove();

// 4 Заменить заголовок

books.children[2].querySelector('h2').querySelector('a').text = 'Книга 3. this и Прототипы Объектов';

//5 Сортировка глав

const sort = collection => {
	const sortElem = arr => {
		const arrIndex = Object.keys(arr).sort((prev, next) => {
			if (arr[prev].innerText > arr[next].innerText) {
				return 1;
			}
			if (arr[prev].innerText < arr[next].innerText) {
				return -1;
			}
		})
		const arrNew = [];
		for (let i = 0; i < arrIndex.length; i++) {
			arrNew.push(arr[arrIndex[i]]);
		}
		return arrNew;
	}

	const elem = collection.querySelectorAll('li');
	let arrChapter = [];
	let arrAll = [];
	elem.forEach(el => {
		if (el.textContent.indexOf('Введение') > -1) {
			collection.insertBefore(el, elem[0]);
		}
		if (el.textContent.indexOf('Предисловие') > -1) {
			collection.insertBefore(el, elem[1]);
		}
		if (el.textContent.indexOf('Глава') > -1) { arrChapter.push(el); }
		if (el.textContent.indexOf('Приложение') > -1) { arrAll.push(el); }
	});

	arrChapter = sortElem(arrChapter);
	arrChapter.forEach(el => {
		collection.appendChild(el);
	});

	arrAll = sortElem(arrAll);
	arrAll.forEach(el => {
		collection.appendChild(el);
	});
}

sort(books.children[1].querySelector('ul'));
sort(books.children[4].querySelector('ul'));






//6 

let createChapt = document.createElement('li');
createChapt.innerText = 'Глава 8: За пределами ES6';
books.children[5].querySelector('ul').appendChild(createChapt);
sort(books.children[5].querySelector('ul'));