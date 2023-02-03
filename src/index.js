module.exports = function check(str, bracketsConfig) {
  let stack = [];
  if (str.length % 2 !== 0) {
    return false;
  } else {
    for (let i = 0; i < str.length; i ++) {
      if (str[i] == '(' || str[i] == '{' || str[i] == '[') {
        stack.push(str[i]);
        } if (str[i] == '|' && stack[stack.length - 1] !== '|') {
          stack.push(str[i]);
        } 
        else if (str[i] == ')' && stack[stack.length - 1] == '(' || str[i] == '}' && stack[stack.length - 1] == '{' || str[i] == ']' && stack[stack.length - 1] == '[' || str[i] == '|' && stack[stack.length - 1] == '|') {
          stack.pop();
        } else if (str[i] == ')' && stack[stack.length - 1] !== '(' || str[i] == '}' && stack[stack.length - 1] !== '{' || str[i] == ']' && stack[stack.length - 1] !== '[') {
          stack.push(str[i]);
        }
    }
    if (stack.length == 0) {
      return true;
    } else {
      return false;
    }
  }
  
};

//const string = '((((((((((((())))))))))))))()';

//const stack = [];

//function check(str) {
//  let stack = [];
//  for (let i = 0; i < str.length; i ++) {
//    if (str[i] == '(' || str[i] == '{' || str[i] == '[') {
//      stack.push(str[i]);
//      } if (str[i] == '|' && stack[stack.length - 1] !== '|') {
//        stack.push(str[i]);
//      } 
//      else if (str[i] == ')' && stack[stack.length - 1] == '(' || str[i] == '}' && stack[stack.length - 1] == '{' || str[i] == ']' && stack[stack.length - 1] == '[' || str[i] == '|' && stack[stack.length - 1] == '|') {
//        stack.pop();
//      } else if (str[i] == ')' && stack[stack.length - 1] !== '(' || str[i] == '}' && stack[stack.length - 1] !== '{' || str[i] == ']' && stack[stack.length - 1] !== '[') {
//        stack.push(str[i]);
//      }
//  }

//  console.log(stack);
//}


//check(string);

