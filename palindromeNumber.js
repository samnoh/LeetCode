// 23/03/19
// LeetCode #09 Palindrome Number (Easy)

/*
Determine whether an integer is a palindrome.
An integer is a palindrome when it reads the same backward as forward.
*/

//TODO: solve without converting int to str
// 244ms (82.76%) and 46MB (11.46%) used
const isPalindrome = function (x) {

    if (x < 0) {
        return false;
    }

    x = String(x);
    for (let i = 0; i < Math.ceil(x.length / 2); i++) {
        if (x[i] !== x[x.length - i - 1]) {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false