// 22/03/19
// LeetCode #7 Reverse Integer (Easy)
// https://leetcode.com/problems/reverse-integer/

/* 
Given a 32-bit signed integer, reverse digits of an integer.

Assume we are dealing with an environment which could only store integers 
within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose of this problem, 
assume that your function returns 0 when the reversed integer overflows.
*/

// 84ms (82.46%) and 36.1MB used (16.77%)
const reverse = function (x) {
    let result = parseInt(String(x).split('').reverse().join(''));
    if (x < 0) {
        result = result * -1;
    }

    return result > Math.pow(2, 31) - 1 || result < Math.pow(-2, 31) ? 0 : result;
};

console.log(reverse(123)) // 321
console.log(reverse(-123)) // -321
console.log(reverse(120)) // 21
console.log(reverse(1534236469)) // 0