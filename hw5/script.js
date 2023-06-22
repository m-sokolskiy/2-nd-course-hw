// // Задание 1
// function number (a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// console.log(number(6, 6));

// // Задание 2
// function number (a) {
//     if (a % 2 == 0) {
//         return 'Число четное';
//     } else {
//         return 'Число нечетное';
//     }
// }

// console.log(number(5));

// // Задание 3
// function number1 (a) {
//     let numeric1 = 12;
//     console.log(numeric1**2); 
// }

// number1();
// function number2 (a) {
//     return a**2;
// }

// console.log(number2(5));

// // Задание 4
// function age () {
//     let userAge = prompt('Сколько Вам лет?')
//     if (userAge < 0) {
//         alert('Вы ввели неправильное значение')
//     } else if (userAge > 0 && userAge < 12) {
//         alert('Привет, друг!') 

//     } else {
//         alert('Добро пожаловать!')
//     }
// }

// age();

// // Задание 5
// function numbers(a, b) {
//     if (isNaN(a) || isNaN(b)) {
//         return 'Одно или оба значения не являются числом';
//     } else {
//         return a * b;
//     }
// }

// console.log(numbers('x', 4));

// // Задание 6
// function numbers() {
//     let userNumber = prompt('Введите число?')
//     if (isNaN(userNumber)) {
//         return 'Переданный параметр не является числом';
//     } else {
//         return `${userNumber} в кубе равняется ${userNumber**3}`
//     }
// }

// console.log(numbers());

// // Задание 7
// function getСircleArea() {
//   return this.p * this.radius;
// }
// function getСirclePerimeter() {
//   return this.p * 2  * this.radius;
// }

// const circle1 = {
//     radius: 9,
//     p: 3.14,
//     getArea: getСircleArea,
//     getPerimeter: getСirclePerimeter
// };

// const circle2 = {
//     radius: 13,
//     p: 3.14,
//     getArea: getСircleArea,
//     getPerimeter: getСirclePerimeter
// }

// console.log(circle1.getArea());
// console.log(circle1.getPerimeter());
// console.log(circle2.getArea());
// console.log(circle2.getPerimeter());