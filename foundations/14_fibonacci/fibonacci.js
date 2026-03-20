const fibonacci = function (index) {
  index = +index;

  if (index < 0) return "OOPS";

  let first = 0;
  let second = 1;

  if (index === 0) {
    return first;
  }
  if (index === 1) {
    return second;
  }

  let fibo = 0;

  for (let i = 2; i <= index; i++) {
    fibo = first + second;
    first = second;
    second = fibo;
  }

  return fibo;
};

// Do not edit below this line
module.exports = fibonacci;
