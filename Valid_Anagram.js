/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const isEqual = s.length === t.length;
    if(!isEqual) {return false}
    return helperFunction(s) === helperFunction(t);
};

const helperFunction = (str) => str
    .split('')
    .sort((a,b) => a.localeCompare(b))
    .join('');
