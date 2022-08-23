var isPalindrome = function (x) {
  var palindrome = x.toFixed().split("").reverse().join("");
  if (palindrome === x.toFixed()) {
    return true;
  } else {
    return false;
  }
};
