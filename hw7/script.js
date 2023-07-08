// Задание 1
// let string = (text) => text.toUpperCase()
// console.log(string('ПрОиЗвОлЬный ТЕксТ'));

// Задание 2
// function data (arr, search) {
//     arr.forEach(el => {
//         if (el .toLowerCase().startsWith(search.toLowerCase())) 
//         console.log(Array.from(Array(el)));
//     })
// }

// let answer = data (['красноармеец', 'жирная красноперка', 'зайчик', 'краснадарский край'], 'КРАСН');

// Задание 3
// console.log(Math.floor(32.58884));
// console.log(Math.ceil(32.58884));
// console.log(Math.round(32.58884));

// Задание 4
// const arr = [52, 53, 49, 77, 21, 32];
 
// console.log(Math.min(...arr));
// console.log(Math.max(...arr));
 
// Задание 5
// let randomInt = () => {
//     let result = Math.round(Math.random() * 10);
//     console.log(result);
// }
// randomInt()

// Задание 6
// function data (a) {
//     return Array.from(Array(Math.floor(a / 2)),() => Math.floor((Math.random() * a) + 1));
// }

// console.log(data(10));

// Задание 7
// function data(a, b) {
//     return Math.floor(Math.random() * (a - b) + b);
// }
 
// console.log( data(1, 100));

// Задание 8
// let currentDate = new Date();
// console.log(currentDate);

// Задание 9
// let dateNow = new Date();
// dateNow.setDate(dateNow.getDate() + 73);
// console.log(dateNow);

// Задание 10
// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
// "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

// function data () {
//     let myDate = new Date();
//     let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + ", " + days[myDate.getDay()] ;
//     let fullTime =  "Время: " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
//     console.log(fullDate,fullTime );
// }
// data ();
