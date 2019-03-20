// 20/03/19
// LeetCode #5 Longest Palindromic Substring (Medium)
// https://leetcode.com/problems/longest-palindromic-substring/

/*
Given a string s, find the longest palindromic substring in s.
You may assume that the maximum length of s is 1000.
e.g.
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
*/

// O(n), runtime 124ms (66.47%), 37.4MB used (51.73%) 
const longestPalindrome = function (s) {
    if (s.length < 2) {
        return s;
    }

    const arr = [];
    for (let i = 0; i < s.length; i++) {
        arr.push({ // insert '+' between characters to find str whose length is 2
            char: '+',
            count: 0,
        });
        arr.push({
            char: s[i],
            count: 0,
        });
    }

    for (let i = 0; i < arr.length; i++) {
        let left = i - 1, right = i + 1, count = 0;
        while (left >= 0 && right < arr.length && arr[left--].char == arr[right++].char) {
            count += 1;
        }
        arr[i].count = count;
    }

    const temp = arr.map(e => e.count);
    const index = temp.lastIndexOf(Math.max(...temp)); // find the maximum count and returns its index
    return arr
        .slice(index - arr[index].count, index + arr[index].count + 1) // cut left and right strings 
        .filter(e => e.char != '+') // no need '+' anymore
        .map(e => e.char)
        .join(''); // toString
};


console.log(longestPalindrome('babad')); // aba or bab
console.log(longestPalindrome('cbbd'));  // bb
console.log(longestPalindrome('ac')); // a or c
console.log(longestPalindrome('bb')); // bb
console.log(longestPalindrome('ccc')); // ccc
console.log(longestPalindrome('cccaaaccc')); // cccaaaccc
console.log(longestPalindrome('abcdbbfcba')); // bb
