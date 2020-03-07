module.exports = function check(str, bracketsConfig) {
  // your solution
  var count = index = 0;
  var mas = str.split('');
  var beginVariants = [];
  var endVariants = [];
  var stack = [];
  var closeIndex;
  var openIndex;
  for (var i = 0; i < bracketsConfig.length; i++) {
    var begin = bracketsConfig[i][0];
    var end = bracketsConfig[i][1];
    if (begin === end) {
      end = end + end;
      var count = 0;
      for (var j = 0; j < mas.length; j++) {
        if (mas[j] === begin) {
          count++;
          if (count % 2 === 0) {
            mas[j] = end;
          }
        }
      }
      beginVariants.push(begin);
      endVariants.push(end);
    } else {
      beginVariants.push(begin);
      endVariants.push(end);
    }
          
  }

  for (var i = 0; i < mas.length; i++) {
    openIndex = beginVariants.indexOf(mas[i]);
    if (openIndex !== -1) {
      stack.push(openIndex);
      continue;
    }
 
    closeIndex = endVariants.indexOf(mas[i]);
    if (closeIndex !== -1) {
      openIndex = stack.pop();
      if (closeIndex !== openIndex) {
        return false;
      }
    }
  }

  if (stack.length !== 0) {
    return false;
  }
            
  return true;

}
