let title = "Лессон 1";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 232;
let rollback = 52;
let fullPrice = 50000;
let adaptive = true;

console.log(typeof title, typeof fullPrice, typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice ,"рублей/ долларов/гривен/юани");
console.log("Стоимость верстки экранов " + fullPrice ,"рублей/ долларов/гривен/юани");
console.log(screens.toLowerCase());
console.log(fullPrice * (rollback/100));