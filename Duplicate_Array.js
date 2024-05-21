var number = [1,1,3,4,4];
var D = 1;

function removeDuplicatesFromArray(number) {
  for (var i = 0; i < number.length - 1; i++) {
    if (number[i] !== number[i + 1]) {
      number[D] = number[i + 1];
      D++;
    }
  }
  return D;
}

var output = removeDuplicatesFromArray(number);
console.log(output);