
/*
    Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

// ## soluation 1 ##
var containsDuplicate = function (nums) {
    const hTable = {}
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in hTable) {
            return true
        }
        hTable[nums[i]] = 1
    }
    return false
};



console.log(containsDuplicate([1, 2, 3, 4, 5, 6, 5]))