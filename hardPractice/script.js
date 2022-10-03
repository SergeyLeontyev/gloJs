let lang = prompt('Выберите язык', 'ru, en');
let namePerson = prompt('Введите ваше имя');
let language_arr = {en: "Mon, Tue, Wed, Thu, Fri, Sat, Sun", ru: "Пн,Вт,Ср,Чт,Пт,Сб,Вс"};

if(lang == 'ru'){
	console.log(language_arr[lang]);
} else if (lang == 'en'){
	console.log(language_arr[lang]);
} else{
	console.log('Вы неверно выбрали язык');
}

switch (lang){
	case 'ru': 
	console.log(language_arr[lang]);
	break
	case 'en':
		console.log(language_arr[lang]);
		break
	default: 
	console.log('Вы неверно выбрали язык');
}

console.log(language_arr[lang]);

namePerson === "Артем" ?  console.log('Директор') : namePerson === "Александр" ? console.log('Преподаватель') : console.log('Студент');
