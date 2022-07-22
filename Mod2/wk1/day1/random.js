module.exports = function (a, b) {
  const difference = b - a;
  return a + (Math.floor(Math.random() * difference));
};
