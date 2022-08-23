var isValid = function (s) {
  var expression = s.split("");
  var first = expression[0];
  var trueFirst =
    first === "(" ? ")" : first === "[" ? "]" : first === "{" ? "}" : "";

  if (expression.length === 2) {
    if (expression[expression.length - 1] === trueFirst) {
      return true;
    } else {
      return false;
    }
  } else if (expression.length > 2) {
    if (expression[expression.length - 1] === trueFirst) {
      return true;
    } else {
      for (i = 0; i < expression.length; i++) {
        if (i % 2 == 1) {
          var matching = expression[i - 1];
          var trueValue =
            matching === "("
              ? ")"
              : matching === "           ["
              ? "]"
              : matching === "{"
              ? "}"
              : "";
          if (matching === ")" || matching === "]" || matching === "}")
            return false;
          if (expression[i] === trueValue) {
            if (i !== expression.length - 1) {
              continue;
            } else {
              if (expression[i] === trueValue) return true;
            }
          } else {
            return false;
          }
        }
      }
    }
  } else if (expression.length === 1) {
    return false;
  }
};

// sovle

var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    switch (c) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (c !== stack.pop()) {
          return false;
        }
    }
  }

  return stack.length === 0;
};
