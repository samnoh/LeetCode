// 23/03/19
// LeetCode #11 Container With Most Water
// https://leetcode.com/problems/container-with-most-water/

/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0).
Find two lines, which together with x-axis forms a container,
such that the container contains the most water.

Note: You may not slant the container and n is at least 2.
*/

// runtime 60ms (95.32%), 35.7MB (36.46%) used
const maxArea = function (height) {
    if (height.length == 2) return Math.min(...height) / 2;

    let i = 0, j = height.length - 1, area = 0;
    while (i < j) {
        area = Math.max((j - i) * Math.min(height[i], height[j]), area);
        height[i] <= height[j] ? i += 1 : j -= 1;
    }

    return area;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49 (7 * 7 = 49)
console.log(maxArea([1, 8])); // 0.5