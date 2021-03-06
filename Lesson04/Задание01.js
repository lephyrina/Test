/* Алгоритм вычисления
сложного банковского процента */

// получаем исходные данные для вычисления

let amount = parseInt(prompt('Введите размер Вашего вклада'));
let percent = parseInt(prompt('Введите годовой процент (без знака %)'));
let period = parseInt(prompt('Введите количество месяцев для расчёта'));
let interest = amount; // это разница между итоговой суммой на счёте и начальным вкладом, изначально она нулевая

// выносим функцию расчёта суммы вклада с процентами за указанное количество месяцев

function percentage() { 
  for (let n = 1; n <= period; n = n + 1) {
    amount = amount + amount * (percent / 100 / 12); // функция рассчитывает процент по вкладу и итоговую сумму вклада
    result = Math.round((amount - interest)*100)/100; // считаем разницу между итоговой суммой и вкладом и сразу округляем до 10 копеек
  }
  return result
}

console.log('Ваш суммарный доход за ' + period + ' мес. составит ' + percentage() + ' рублей');
console.log('Ваш суммарный доход за ' + 2 * period + ' мес. составит ' + percentage() + ' рублей');
console.log('Ваш суммарный доход за ' + 3 * period + ' мес. составит ' + percentage() + ' рублей');

// выводим результат
