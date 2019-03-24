// 23/03/19
// LeetCode #12 Integer To Roman
// https://leetcode.com/problems/integer-to-roman/

/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together.
Twelve is written as, XII, which is simply X + II.
The number twenty seven is written as XXVII, which is XX + V + II.
Roman numerals are usually written largest to smallest from left to right.
However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.
*/

// runtime 184ms (49.11%) and 41.8MB (14.61%) used
const romans =
    [{ num: 1, symbol: 'I', }, { num: 5, symbol: 'V', }, { num: 10, symbol: 'X' }, { num: 50, symbol: 'L' },
    { num: 100, symbol: 'C' }, { num: 500, symbol: 'D' }, { num: 1000, symbol: 'M' }];


const intToRomanUtil = function (num) {
    let result = '';
    const num_loop = num < 1000 ? String(num).length * 2 - 1 : romans.length - 1;
    for (let i = num_loop; i >= num_loop - 1; i--) {
        result += romans[i].symbol.repeat(Math.floor(num / romans[i].num));
        num = num % romans[i].num;
    }

    return result;
};

function intToRoman(num) {
    num = String(num);
    const arr = new Array(num.length);

    for (let i = 0; i < num.length; i++) {
        arr[i] = intToRomanUtil(num[i] * Math.pow(10, num.length - i - 1)); // 934 = 9 * 100 + 3 * 10 + 4 * 1
        if (num[i] == 4 || num[i] == 9) {
            arr[i] = arr[i][1] + romans[romans.indexOf(romans.find(e => e.symbol === arr[i][0])) + 1].symbol;
        }
    }

    return arr.join('');
}

console.log(intToRoman(3)); // 'III'
console.log(intToRoman(4)); // 'IV'
console.log(intToRoman(5)); // 'V'
console.log(intToRoman(9)); // 'IX'
console.log(intToRoman(58)); // 'LVIII'
console.log(intToRoman(1994)); // 'MCMXCIV'
