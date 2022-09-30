var title = 'Новый проект';
var screens = 'Простые, Сложные, Интерактивные';
var screenPrice = 1500;
var rollback = 13;
var fullPrice = 10000;
var adaptive = true;

console.log(typeof(title));
console.log(typeof(fullPrice));
console.log(typeof(adaptive));

console.log(screens.length);
console.log('Стоимость верстки экранов' + ' ' + screenPrice + ' ' + 'рублей/долларов/гривен/юани');
console.log('Стоимость разработки сайта' + ' ' + fullPrice + ' ' + 'рублей/долларов/гривен/юани');

console.log(screens.toLowerCase().split());

console.log('Процент отката посреднику за работу' + ' ' + (fullPrice * (rollback / 100)));


