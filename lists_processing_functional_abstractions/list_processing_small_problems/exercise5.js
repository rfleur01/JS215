function leadingSubstrings(string) {
  let subString = [];
  for (let i = 0; i < string.length; i += 1) {
    subString.push(string.slice(0, i + 1));
  }

  return subString
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]