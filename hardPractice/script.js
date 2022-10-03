let lang = prompt('Выберите язык', 'ru, en');
let namePerson = prompt('Введите ваше имя');

if(lang == 'ru'){
	console.log('Пн,Вт,Ср,Чт,Пт,Сб,Вс');
} else if (lang == 'en'){
	console.log('Mon, Tue, Wed, Thu, Fri, Sat, Sun');
} else{
	console.log('Вы неверно выбрали язык');
}

switch (lang){
	case 'ru': 
	console.log('Пн,Вт,Ср,Чт,Пт,Сб,Вс');
	break
	case 'en':
		console.log('Mon, Tue, Wed, Thu, Fri, Sat, Sun');
		break
	default: 
	console.log('Вы неверно выбрали язык');
}




let language_arr = [];
language_arr['ru'] = ['Пн','Вт','СР','Чт','Пт','Сб','Вс'];
language_arr['en'] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
console.log(language_arr[lang]);

namePerson === "Артем" ?  console.log('Директор') : namePerson === "Александр" ? console.log('Преподаватель') : console.log('Студент');