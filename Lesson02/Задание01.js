/* Программа определяет,
является ли 3аданный год
високосным или нет */

let year = prompt('Введите любой год'); // задаём год

if (year % 4 !== 0) { // если год не делится на 4 без остатка...
  console.log('Это не високосный год'); // ...то он не високосный
} else if (year % 100 !== 0) { // если год делится на 4, но не делится на 100 без остатка...
  console.log('Это високосный год'); // ... то он високосный
} else if (year % 400 == 0) { // если год делится и на 4, и на 100, и на 400 без остатка...
  console.log('Это високосный год'); // ...то он високосный
} else { // а если год не делится без остатка ни на 4, ни на 100, ни на 400...
  console.log('Это не високосный год'); // ...то он не високосный
 }
