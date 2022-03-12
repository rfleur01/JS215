function myMap(array, func) {
  let newArray = [];
  array.forEach(value => {
    newArray.push(func(value));
  });

  return newArray;
}

let plusOne = n => n + 1;
myMap([1, 2, 3, 4], plusOne);       // [ 2, 3, 4, 5 ]