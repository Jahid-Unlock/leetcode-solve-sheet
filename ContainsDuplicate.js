
/*
    Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

// ## soluation 1 using HashTable ##
// var containsDuplicate = function(nums) {
//     const hTable = {}

//     for(let i = 0; i<nums.length; i++){
//         if(nums[i] in hTable){
//             return true
//         }
//         hTable[nums[i]] = 1
//     }

//     return false
// };


// ## soluation 2 using SET() ##
// var containsDuplicate = function(nums) {
//     const newSet = new Set()
    
//     for(let i = 0; i<nums.length; i++){
//         if(newSet.has(nums[i])){
//             return true;
//         }
//         newSet.add(nums[i])
//     }

//     return false
// };

// ## soluation 2 using List ##

var containsDuplicate = function(nums) {
    const newArr = [];
    for(const num of nums){
        if(newArr.includes(num)){
            return true
        }
        newArr.push(num)
    }

    return false
};




console.log(containsDuplicate([1, 2, 3, 4, 4, 5, 6]))