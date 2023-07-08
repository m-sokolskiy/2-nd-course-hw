function month() {
    let monthNumber = prompt('Введите порядковый номер месяца');

    switch (monthNumber) {
        case '1':
            alert('Зима');
            break;
        case '2':
            alert('Зима');
            break;
        case '3':
            alert('Весна');
            break;       
        case '4':
            alert('Весна');
            break;
        case '5':
            alert('Весна');
            break;
        case '6':
            alert('Лето');
            break; 
        case '7':
            alert('Лето');
            break;
        case '8':
            alert('Лето');
            break;
        case '9':
            alert('Осень');
            break;       
        case '10':
            alert('Осень');
            break;
        case '11':
            alert('Осень');
            break;
        case '12':
            alert('Зима');
            break;
        default:
            alert('Ошибка');
            break;
    }
}

const arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

function words() {
    const shuffledWords = arr.toSorted(() => Math.random() - 0.5)
    alert(`Перемешанный массив: ${shuffledWords.join(', ')}`);

    const firstWord = prompt('Какое слово было на первом месте');
    const lastWord = prompt('Какое слово было на последнем месте');

    let score = 0;
    score = score+1; // score++

    if (firstWord.toLowerCase() === shuffledWords[0].toLowerCase()) score++;
    if (lastWord.toLowerCase() === shuffledWords[shuffledWords.length - 1].toLowerCase()) score++;

    switch (score) {
        case 2:
            alert('Поздравляем Вы, угадали два слова!')
            break;
        case 1:
            alert('Вы были близки к победе!')
            break;
        default:
            alert('Вы ответили неверно')
            break;
    }

}

