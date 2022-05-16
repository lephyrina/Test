/*
Программа выбирает фигуру и её размер
в зависимости от ответов пользователя
*/

let fig = prompt('Какую фигуру вы хотите нарисовать? Если хотите квадрат, нажмите 1. Если хотите круг, нажмите 2'); // выбираем фигуру

if (fig == 1) { // если выбран квадрат
  let size = prompt('Вы выбрали квадрат. Теперь задайте его ширину');
  let os_x = prompt('Где будем рисовать? Задайте координату по оси Х');
  let os_y = prompt('Где будем рисовать? Задайте координату по оси Y');
  drawRect (os_x, os_y, size, size, 'blue'); // рисуем квадрат на основании введённых данных
} else if (fig == 2) { // в противном случае
  let rad = prompt('Вы выбрали круг. Теперь задайте его радиус');
  let os_x = prompt('Где будем рисовать? Задайте координату по оси Х');
  let os_у = prompt('Где будем рисовать? Задайте координату по оси Y');
  drawCircle (os_x, os_у, rad, 'blue'); // рисуем круг на основании введённых данных
} else { // если фигура не выбрана или выбрана неверно
  console.log ('Нужно выбрать только 1 или 2! Попробуйте ещё раз');
}
