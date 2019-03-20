// 20/03/19
// LeetCode Longest #3 Substring Without Repeating Characters (Medium)
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/*
Given a string, find the length of the longest substring without repeating characters.
*/

// O(n), runtime 88ms (96.06%) and 37.5MB (89.07%) used
const lengthOfLongestSubstring = function (s) {
    const hash = new Array(128).fill(0); // ASCII table
    let max = 0, start = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s.charCodeAt(i);
        start = Math.max(start, hash[char]); // finds where the end of a substring is
        const from = i - start + 1; // increases by 1 only if a new character found
        max = Math.max(max, from); // finds the longest
        hash[char] = i + 1; // records what is the index + 1 for s[i]
    }

    return max;
};

console.log(lengthOfLongestSubstring('abcabcbb')); // 3 (abc)
console.log(lengthOfLongestSubstring('bbbbb')); // 1 (b)
console.log(lengthOfLongestSubstring('pwwkew')); // 3 (wke)
console.log(lengthOfLongestSubstring('dvadf')); // 4 (vadf)
console.log(lengthOfLongestSubstring('aua')); // 2 (au or ua)