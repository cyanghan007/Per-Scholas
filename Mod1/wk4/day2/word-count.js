// https://exercism.org/tracks/javascript/exercises/word-count

export const countWords = (string) => {
  let array = string.match(/\w+('\w+)?/g);
  let ocurr = {};
  for (let word of array) {
    word = word.toLowerCase();
    ocurr[word] ? ocurr[word]++ : ocurr[word] = 1;
  }
  return ocurr;
  };