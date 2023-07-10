// Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

function age (callback) {
    callback();
}
 
const ageSort = () => {
    console.log(people.sort());
}

age(ageSort)
