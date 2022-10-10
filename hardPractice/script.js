let box = document.querySelector('.date');
let date = new Date();
let numbDay = ['Пн','Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

numbDay.forEach((item, index) =>{
	let dateDay = document.createElement('p');
	dateDay.innerHTML = item;
	box.appendChild(dateDay);
	if(index == date.getDay() - 1){
		dateDay.style.fontStyle = "italic";
	}
	if(item == 'Вс' || item == 'Сб'){
		dateDay.style.fontWeight = "bold";
	}
});



