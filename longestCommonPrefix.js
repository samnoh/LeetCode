// 25/03/19
// LeetCode #14 Longest Common Prefix (Easy)
// https://leetcode.com/problems/longest-common-prefix/

/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
*/

// runtime 60ms (92.04) and 34.8MB (68.10%) used
const longestCommonPrefix = function (strs) {
    if (strs.length == 0) {
        return '';
    }

    const min_len = Math.min(...strs.map(e => e.length));
    let result = '';

    for (let i = 0; i < min_len; i++) {
        if (strs.map(e => e.slice(i, i + 1)).every((e, index, arr) => e === arr[0])) {
            result += strs[0].slice(i, i + 1);
        }
        else {
            break;
        }
    }

    return result;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // 'fl'
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // '' (empty - no common prefix)
console.log(longestCommonPrefix(["abca", "abc"])) // 'abc'
console.log(longestCommonPrefix([])); // ''
