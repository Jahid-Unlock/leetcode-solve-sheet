/*
    Given two strings s and t, return true if t is an anagram of s, and false otherwise.
*/

var isAnagram = function(s, t) {
    const a = [...s].sort().join('')
    const b = [...t].sort().join('')

    if(a === b){
        return true
    }

    return false
};



console.log(isAnagram('jahid', 'dihaj'))
