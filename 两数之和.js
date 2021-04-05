/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map();
    for (let k = 0, len = nums.length; k < len; k++) {
        if (map.has(target - nums[k])) {
            return [map.get(target - nums[k]), k]
        } else {
            map.set(nums[k], k);
        }
    }
    return [];
};