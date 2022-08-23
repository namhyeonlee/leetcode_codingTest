var searchInsert = function (nums, target) {
  if (nums.indexOf(target) > -1) {
    return nums.indexOf(target);
  } else {
    if (target > nums[nums.length - 1]) {
      return nums.length;
    } else {
      for (i = 0; i < nums.length; i++) {
        if (nums[i] > target) {
          return i;
        }
      }
    }
  }
};
