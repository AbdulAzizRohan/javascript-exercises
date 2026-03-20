const palindromes = function (str) {
  str = str
    .split(/[^a-zA-Z0-9]/)
    .join("")
    .toLowerCase();
  let reverseStr = str.split("").reverse().join("");

  if (str === reverseStr) return true;
  return false;
};

// Do not edit below this line
module.exports = palindromes;
