/* Программа для подсчёта
процентов по вкладу */

// Вариант 1 через оператор while

let amount = parseInt(prompt('Введите размер Вашего вклада'));
let percent = parseInt(prompt('Введите годовой процент (без знака %)'));
let period = parseInt(prompt('Введите количество месяцев для расчёта'));
let n = 1;
let interest = amount;

while (n <= period) {
  amount = amount + amount * (percent / 100 / 12); // рассчитываем ежемесячный процент
  console.log('За ' + n + ' мес. размер Вашего вклада составит ' + amount + ' рублей'); // выводим сумму вклада за каждый месяц
  n = n + 1; 
}

interest = amount - interest; // вычитаем начальную сумму вклада из итоговой и получаем чистый доход
console.log('Ваш суммарный доход за ' + period + ' мес. составит ' + Math.round(interest*100)/100 + ' рублей');

// Вариант 2 через оператор do while

let amount = parseInt(prompt('Введите размер Вашего вклада'));
let percent = parseInt(prompt('Введите годовой процент (без знака %)'));
let period = parseInt(prompt('Введите количество месяцев для расчёта'));
let n = 1;
let interest = amount;

do {
  amount = amount + amount * (percent / 100 / 12);
  console.log('За ' + n + ' мес. размер Вашего вклада составит ' + amount + ' рублей');
  n = n + 1;
}

while (n <= period);

interest = amount - interest;
console.log('Ваш суммарный доход за ' + period + ' мес. составит ' + Math.round(interest*100)/100 + ' рублей');

// Вариант 3 через оператор for

let amount = parseInt(prompt('Введите размер Вашего вклада'));
let percent = parseInt(prompt('Введите годовой процент (без знака %)'));
let period = parseInt(prompt('Введите количество месяцев для расчёта'));
let interest = amount;

for (let n = 1; n <= period; n = n + 1) {
  amount = amount + amount * (percent / 100 / 12);
  console.log('За ' + n + ' мес. размер Вашего вклада составит ' + amount + ' рублей');
}

interest = amount - interest;
console.log('Ваш суммарный доход за ' + period + ' мес. составит ' + Math.round(interest*100)/100 + ' рублей');