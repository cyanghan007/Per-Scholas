function addTwoDigits(n) {
  const string = n.toString();
  const digit1 = Number(string.charAt(0));
  const digit2 = Number(string.charAt(1));
  return digit1 + digit2;
}

console.log(addTwoDigits(29));