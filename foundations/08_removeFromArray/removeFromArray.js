const removeFromArray = function (array, ...removeUs) {
  return array.filter((item) => {
    return removeUs.includes(item) === false;
  });
};

// Do not edit below this line
module.exports = removeFromArray;
