function isBalanced(string) {
  let tracker = 0;

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '(') {
      tracker += 1;
    } else if (string[i] === ')') {
      tracker -= 1;
    }

    if (tracker < 0) {
      return false;
    }
  }

  return tracker === 0;
}

isBalanced('What (is) this?');        // true
isBalanced('What is) this?');         // false
isBalanced('What (is this?');         // false
isBalanced('((What) (is this))?');    // true
isBalanced('((What)) (is this))?');   // false
isBalanced('Hey!');                   // true
isBalanced(')Hey!(');                 // false
isBalanced('What ((is))) up(');       // false