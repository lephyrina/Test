let userName = prompt('Как Вас зовут?'); // запрашиваем имя
let birthYear = prompt('В каком году Вы родились?'); // запрашиваем год рождения
let currentYear = (new Date()).getFullYear(); // определяем текущий год

console.log(userName + ', на будущий год Вам исполнится ' + (currentYear - birthYear + 1) + '!'); // выводим результат
