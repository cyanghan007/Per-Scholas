let str = "xzxzx";
let count = 0;

for (let i = 0; i < str.length - 2; i++) {
  for (let j = i + 1; j < str.length - 1; j++) {
    let a = str.slice(0, i + 1);
    let b = str.slice(i + 1, j + 1);
    let c = str.slice(j + 1, str.length);
    if ((a + b != b + c) && (b + c != c + a) && (a + b != c + a)) {
      count++;
    }
  }
}

console.log(count);