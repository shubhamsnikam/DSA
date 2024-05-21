var nums = [3,7,2,11];

var target = 10;

function twoSum(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      var addition = nums[i] + nums[j];
      if (target === addition) {
       
        return [i, j];
      }
    }
  }
}
var output = twoSum(nums, target);
console.log(output);