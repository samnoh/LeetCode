// 22/03/19
// LeetCode #8 String to Integer (atoi) (Medium)
// https://leetcode.com/problems/string-to-integer-atoi/

/*
Implement atoi which converts a string to an integer.

The function first discards as many whitespace characters as necessary 
until the first non-whitespace character is found. Then, starting from this character, 
takes an optional initial plus or minus sign followed by as many numerical digits as possible, 
and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, 
which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, 
or if no such sequence exists because either str is empty or it contains only whitespace characters, 
no conversion is performed.

If no valid conversion could be performed, a zero value is returned.
*/

// 88ms (75.46%) and 36.1MB used (54.48%)
const myAtoi = function (str) {
    str = str.trim().split('');
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let a = str[i].charCodeAt(0); // ascii code

        if (a >= 48 && a <= 57 || (a == 43 || a == 45)) { // >= 0 and <= 9 or (+ or -)
            result += str[i];
        }
        else if (i == 0) {
            return 0; // str[0] is not a numerical or + or - sign
        }
        else {
            break; // no need to read str any more
        }
    }

    result = parseInt(result);

    if (result > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1;
    }
    else if (result < Math.pow(-2, 31)) {
        return Math.pow(-2, 31);
    }

    return isNaN(result) ? 0 : result;
};

console.log(myAtoi('42')); // 42
console.log(myAtoi('   -42')); // -42
console.log(myAtoi('4193 with words')); // 4193
console.log(myAtoi('words and 987')); // 0
console.log(myAtoi('-91283472332')) // -2147483648 (-2^31)
console.log(myAtoi('3.14159')) // 3
console.log(myAtoi('.1')) // 0
console.log(myAtoi(' ')) // 0