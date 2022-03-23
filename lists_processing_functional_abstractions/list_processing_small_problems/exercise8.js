function buyFruit(array) {
  let flatArray = [];

  array.forEach(subArray => {
    for (let i = 0; i < subArray[1]; i += 1) {
      flatArray.push(subArray[0]);
    };
  });

  return flatArray;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]