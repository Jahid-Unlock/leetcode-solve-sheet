// var groupAnagrams = function(strs) {
    
//     let sortedStr = strs.map(str => str.split('').sort().join(''))
//     console.log(sortedStr)
//     const map = {}

//     for(let i = 0; i<sortedStr.length; i++){
//         console.log( [strs[i]])
//         if(!map[sortedStr[i]]){
//             map[sortedStr[i]] = [strs[i]];
//         }else{
//             map[sortedStr[i]].push(strs[i]);
//         }
//     }

 
//     return Object.values(map)

// };

//case one

var groupAnagrams = function(strs) {
    let map = new Map()

    for (let current of strs){
        let sorted = current.split('').sort().join('')
        if (!map.has(sorted)) {
            map.set(sorted, [])
        }
        map.get(sorted).push(current)
    }

    return Array.from(map.values())
};

//case twpo

var groupAnagrams = function(strs) {
    let map = new Map();
    for(let current of strs){
        let sorted = current.split('').sort().join('');
        if(!map.has(sorted)){
            map.set(sorted, [])
        }
        else{
            map.get(sorted).push(current)
        }
        
    }

    return Array.from(map.values())
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
