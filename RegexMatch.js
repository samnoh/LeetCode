// 23/03/19
// LeetCode #09 Regular Expression Matching (Hard)
// https://leetcode.com/problems/regular-expression-matching/

/*
Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.

'.' Matches any single character.
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

- s could be empty and contains only lowercase letters a-z.
- p could be empty and contains only lowercase letters a-z, and characters like . or *.
*/

/*
// runtime 84ms (78.55%) and 34.6MB (85.29%) used
const isMatch = function (s, p) {
    const regex = new RegExp(p, 'g');
    return s.match(regex) == null || s !== s.match(regex)[0] ? false : true;
};
*/

console.log(isMatch('aa', 'a')); // false
console.log(isMatch('aa', 'a*')); // true
console.log(isMatch('ab', '.*')); // true
console.log(isMatch('aab', 'c*a*b')); // true
console.log(isMatch('mississippi', 'mis*is*p*.')); // false
console.log(isMatch('ab', '.*c')); // false