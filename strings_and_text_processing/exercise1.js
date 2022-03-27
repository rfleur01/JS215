function reverse(string) {
  let newString = '';

  for (let i = string.length - 1; i >= 0; i -= 1) {
    newString += string[i];
  }
  
  return newString;
}

reverse('hello');                  // returns "olleh"
reverse('The quick brown fox');    // returns "xof nworb kciuq ehT"