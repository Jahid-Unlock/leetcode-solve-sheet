var productExceptSelf = function (nums) {
  // Initialize output array with 1s
  let output = []

  let prefix = 1;
  for(let i = 0; i<nums.length; i++){
    output.push(prefix);
    prefix = prefix * nums[i]
  }

  let postfix = 1;
  for(let i = nums.length -1; i>=0; i--){
     output[i] = output[i] * postfix
     postfix = postfix * nums[i]
  }

  return output;
};

// Test case
let nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums)); // [24,12,8,6]
