/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var len = nums.length;
    var item;
    for (var i = 0; i < len; i++) {
        item = nums[i];
        if (item === 0) {
            nums.splice(i, 1);
            nums.push(0);
            i--;
            len--;
        }
    }
};
