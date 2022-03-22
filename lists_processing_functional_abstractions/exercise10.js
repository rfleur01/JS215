let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

function totalSquareArea(array) {
  let squares = array.filter(value => value[0] === value[1]);
  let areas = squares.map(value => value[0] *  value[1]);
  return totalArea = areas.reduce((intialValue, secondValue) => intialValue + secondValue);
}

console.log(totalSquareArea(rectangles));    // 121