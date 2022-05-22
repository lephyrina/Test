/* Программа, которая рисует
доску для игры в крестики-нолики */

function drawGrid(gap, cell) {
  for (let y = 1; y < 3; y = y + 1) {
    drawRect (gap + cell * y / 3, gap, 2, cell, 'red');
    for (let x = 1; x < 3; x = x + 1) {
      drawRect (gap, gap + cell * x / 3, cell, 2, 'red');
    }
  }
}


let cell = parseInt(prompt('Задайте ширину клетки'));

drawGrid(cell * 2, cell);
drawGrid(cell * 1.5, cell * 2);
drawGrid(cell, cell * 3);