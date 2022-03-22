function multiplyAllPairs(array1, array2) {
  let result = []
  array1.forEach((value) => {
    array2.forEach((num) => result.push(value * num))
  });

  return result.sort((a, b) => a - b)
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
