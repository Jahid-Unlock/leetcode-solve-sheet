var topKFrequent = function(nums, k) {
    const map = {}

    for(let i = 0; i<nums.length; i++){
        if(!map[nums[i]]){
            map[nums[i]] = []
        }
        map[nums[i]].push(nums[i])
    }

    const mapped = Object.keys(map).map(key => [key, map[key].length]);  
    const sortedMap = mapped.sort((a,b) => b[1] - a[1])
    

    let finalArr = []
    for(let i = 0; i<k; i++){
        finalArr.push(sortedMap[i][0])
    }

    return finalArr
    
};


console.log(topKFrequent([8,8,8,1,1,0,0,1,2,2,3], 2))