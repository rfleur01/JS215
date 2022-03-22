function octalToDecimal(numberString) {
  let decimalParts = numberString.split('').map((digit, index) => {
    return Number(digit) * Math.pow(8, numberString.length - 1 - index)
  });
}

octalToDecimal('1');           // 1
octalToDecimal('10');          // 8
octalToDecimal('130');         // 88
octalToDecimal('17');          // 15
octalToDecimal('2047');        // 1063
octalToDecimal('011');         // 9