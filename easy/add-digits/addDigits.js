/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
	if (num < 10) {
		return num;
	}

	var result = 0;
	var divideNum = num;
	while (parseInt(divideNum / 10, 10) > 0) {
		result += divideNum % 10;
		divideNum = parseInt(divideNum / 10, 10);
	}
	result += divideNum;
	return result >= 10 ? addDigits(result) : result;
};

console.log(addDigits(19));
