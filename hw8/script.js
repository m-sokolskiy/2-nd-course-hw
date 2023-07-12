// Задание 1
// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
// ];

// console.log((people.sort((a, b) => a.age - b.age)));

// Задание 2
// function isPositive (el) {
//     if (el > 0) {
//         return true;
//     }
// }

// function isMale(el) {
//     if (el.gender == 'male') {
//         return true;
//     }   
// }
      
// function filter(arr, ruleFunction) {
//     let result = [];
      
//     for (let i = 0; i < arr.length; i++) {      
//         if (ruleFunction(arr[i]) === true) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// const people = [
//     {name: 'Глеб', gender: 'male'},
//     {name: 'Анна', gender: 'female'},
//     {name: 'Олег', gender: 'male'},
//     {name: 'Оксана', gender: 'female'}
// ];

// console.log(filter([3, -4, 1, 9], isPositive)); 
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
// function delayForSecond(callback) {
//     setTimeout(() => {callback()}, 1000)
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

// delayForSecond(() => sayHi('Глеб'));