/* Программа, которая подсчитывает
сумму покупок в чеке*/

// функция выбора максимального числа из массива
function getMaxFromArray(array) {
  let maxNumber = 0; // задали начальное значение, равное 0
  for (let i = 0; i < array.length; i++) { // перебираем все элементы массива по порядку
    if (array[i] > maxNumber) { // если элемент массива больше, чем заданное максимальное число...
      maxNumber = array[i]; // ...перезаписываем максимальное число
    }
    }
  return maxNumber // и выдаём максимальное число из массива
}
// функция рисования графика
function drawGraph(array, height, width) {
  let max = getMaxFromArray(array);
  let prev = [0, height] // задаём начальную координату - 0 по оси x, 200 по оси y
  for (let i = 0; i < array.length; i++) {
    let step = width / array.length;
    let current = [i * step, height - array[i] / max * height]; // по оси х делаем шаг в 10 пунктов, по оси у откладываем разницу в цене
    drawLine(prev[0], prev[1], current[0], current[1]);
    prev = current;
  }
}
// функция рисования засечек координатной сетки
function drawGrid(height, width, step) {
  for (let i = 0; i < array.length; i++) {
    let step = width / array.length;
    drawLine(step * i, (height + 20), step * i, height, 'green', 1);
  }
}

// задаём все параметры и переменные
let userInput = prompt('Введите цены покупок из чека через запятую'); // получаем ряд значений
let height = parseInt(prompt('Задайте высоту графика')); // задаём высоту графика - появляется параметр height
let width = parseInt(prompt('Задайте ширину графика')); // задаём ширину графика - появляется параметр width
let array = userInput.split(','); // собираем из этих значений массив - появляется параметр array
// Теперь переведём все значения в числовой тип
let prices = array.map (
  function(element) {
    return parseInt(element);
  }
  );
// Теперь последовательно суммируем все значения из массива
let sum = 0; // изначально сумма равна нулю
for (let i = 0; i < prices.length; i++) { // перебираем все позиции в массиве
  sum = sum + prices[i]; // прибавляем к сумме каждую новую позицию и обновляем значение
}

drawGraph(prices, height, width);
drawLine(0, (height + 10), (width + 10), (height + 10), 'red', 1);
drawGrid(height, width);
console.log('Сумма ваших покупок: ' + sum); // выводим сумму
// выбираем максимальное число из массива

