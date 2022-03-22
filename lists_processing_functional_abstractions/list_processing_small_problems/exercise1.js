function sum(number) {
  let numberArray = String(number).split('')
  return numberArray.map((num) => Number(num)).reduce((total, value) => total + value);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45