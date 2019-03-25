// 25/03/19
// LeetCode #15 3Sum (Medium)
// https://leetcode.com/problems/3sum/

/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0?
Find all unique triplets in the array which gives the sum of zero.

Note:
The solution set must not contain duplicate triplets.
*/

// runtime 176ms (77.59%) and 47MB (41.37%) used
const threeSum = function (nums) {
    const arr = new Array();
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) {
            break; // no need to calculate more
        }

        if (nums[i] == nums[i - 1]) {
            continue; // skips same values
        }

        const target = -nums[i];
        let left = i + 1, right = nums.length - 1;

        while (left < right) {
            let sum = nums[left] + nums[right];

            if (sum == target) { // -nums[i] == nums[left] + nums[right]
                arr.push([nums[i], nums[left], nums[right]]);
            }

            if (target - sum >= 0) {
                do {
                    left += 1; // increase value
                } while (nums[left] == nums[left - 1]); // skips same values
            }
            else {
                do {
                    right -= 1; // decrease value
                } while (nums[right] == nums[right + 1]); // skips same values
            }
        }
    }

    return arr;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, 0, 1], [-1, -1, 2]]
console.log(threeSum([0, 0, 0, 0])); // [[0, 0, 0]]
console.log(threeSum([3, -2, 1, 0])); // []