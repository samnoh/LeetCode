// 20/03/19
// LeetCode #6 ZigZag Conversion (Medium)
// https://leetcode.com/problems/zigzag-conversion/

/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
*/

const convert = function (s, numRows) {
    let straight = true, count = 0, col_count = 0;
    const arr = [];
    while (count < s.length) {
        let temp = [];
        if (straight) { // main columns
            for (let j = 0; j < numRows; j++) {
                temp.push(s[count + j])
            }
            if (numRows - 2 !== 0) {
                straight = false;
            }
            count += numRows;
            col_count = 0;
        }
        else {
            col_count += 1;
            if (col_count == numRows - 2) {
                straight = true;
            }
            for (let i = 0; i < numRows - col_count - 1; i++) {
                temp.push('');
            }
            temp.push(s[count]);

            for (let i = 0; i < col_count; i++) {
                temp.push('');
            }

            count += 1;
        }

        arr.push(temp);
    }

    let result = '';
    count = 0;
    while (count < numRows) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][count]) { // not null
                result += arr[i][count];
            }
        }
        count += 1;
    }

    return result;
};

console.log(convert('PAYPALISHIRING', 3)); // PAHNAPLSIIGYIR
console.log(convert('ABCD', 2)) // ACBD