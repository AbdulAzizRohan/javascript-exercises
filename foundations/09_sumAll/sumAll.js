const sumAll = function (a, b) {
  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    Math.floor(a) !== Math.abs(a) ||
    Math.floor(b) !== Math.abs(b)
  ) {
    return "ERROR";
  }

  let start = a,
    end = b;
  if (a > b) (start = b), (end = a);

  let sum = 0;
  for (let i = start; i <= end; i++) sum += i;

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
