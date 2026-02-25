const repeatString = function (str, num) {
  if (num < 0) return "ERROR";
  else if (num === 0) return "";

  let new_str = str;
  for (let i = 0; i < num - 1; i++) {
    new_str += str;
  }
  return new_str;
};

// Do not edit below this line
module.exports = repeatString;
