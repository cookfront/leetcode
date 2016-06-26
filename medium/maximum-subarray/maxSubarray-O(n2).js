/**
 * 普通版本O(n2)，会报`Time Limit Exceeded`，说明需要优化
 */
function maxSubarray(nums) {
	var len = nums.length;
	var max = Math.max();
	var sum;
	for (var i = 0; i < len; i++) {
		sum = 0;
		for (var j = i; j < len; j++) {
			sum += nums[j];
			if (sum > max) {
				max = sum;
			}
		}
	}
	return max;
}

var arr = [-1];
console.log(maxSubarray(arr));
