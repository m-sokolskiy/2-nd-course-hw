// Задание 1
// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
// ];

// function age (callback) {
//     callback();
// }
 
// const ageSort = () => {
//     console.log(people.sort(function(a, b) { 
//     return a.age - b.age;
// }))
// }

// age(ageSort)

// Задание 2
// function isPositive(el) {
//     if (el > 0) {
//         return el;
//     }
// }

// function isMale(feature) {
//     if (feature.gender == 'male') {
//         return feature;
//     }
    
// }

// function filter(arr, ruleFunction) {
//     for (let i = 0; i < arr.length; i++) {
//         return arr.filter(ruleFunction);
        
//     }
// }

// console.log(filter([3, -4, 1, 9], isPositive)); 

// const people = [
//    {name: 'Глеб', gender: 'male'},
//    {name: 'Анна', gender: 'female'},
//    {name: 'Олег', gender: 'male'},
//    {name: 'Оксана', gender: 'female'}
// ];

// console.log(filter(people, isMale));

// Задание 3
// const timer = (deadline) => {
//     const interval = setInterval(() => {
//         let currentDate = new Date();
//         console.log(currentDate);
//     }, 3000);


//     setTimeout(() => {
//         clearInterval(interval);
//         console.log('30 секунд прошло')
//     }, deadline * 1000)
// };
    
// timer(30);

// Задание 4
// function showAd() {
// 	console.log('Привет, Глеб!');
// }

// setTimeout(showAd, 1000);
// function delayForSecond(callback) {
//     setTimeout(() => {
//     if(callback) {
//         callback(); 
//     }
//     }, 1000)
// }

// delayForSecond(function () {
//   console.log('Привет, Глеб!');
// })

// Задание 5
// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
//     if(cb) {
//         cb(); 
//     }
//     }, 1000)
// }

// function sayHi (name) {
//     console.log(`Привет, ${name}!`);
// }

// setTimeout(() => {
//    sayHi('Глеб'); 
// }, 2000);

// delayForSecond();
 