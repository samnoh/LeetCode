// 20/03/19
// LeetCode Longest #3 Substring Without Repeating Characters (hard)
// https://leetcode.com/problems/median-of-two-sorted-arrays/

/*
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.
*/

// if O(nlogn) is okay, runtime 136ms (70.16%), 39.4MB used (41.57%)
const findMedianSortedArrays = function (nums1, nums2) {
    const arr = nums1.concat(nums2);
    const len = arr.length;

    arr.sort((a, b) => a - b); // quick sort O(nlogn)

    if (len % 2 === 0) { // even
        const a = len / 2, b = a - 1;
        return (arr[a] + arr[b]) / 2;
    }
    else { // odd
        return arr[Math.floor(len / 2)];
    }
};

console.log(findMedianSortedArrays([1, 3], [2])); // 2.0
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5