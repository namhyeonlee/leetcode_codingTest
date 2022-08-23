var twoSum = function (nums, target) {
  var result1 = null;
  var result2 = null;

  nums.forEach((data, i) => {
    let first_result = data;
    let order = i;

    nums.forEach((num, i) => {
      if (i == order) return;

      if (first_result + num == target) {
        result1 = order;
        result2 = i;
      }
    });
  });

  return [result1, result2];
};
