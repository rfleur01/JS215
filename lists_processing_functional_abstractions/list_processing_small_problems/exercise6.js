function substrings(string) {
  let subStrings = [];
  for (let i = 0; i < string.length; i += 1) {
    for(let j = i; j < string.length; j += 1) {
      subStrings.push(string.slice(i, j + 1));
    }
  }

  return subStrings;
}

console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]