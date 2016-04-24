/**
 * @param {string} str
 * @return {string}
 */
function reverseString(str) {
	var len = str.length;
	var tmp = '';
	for (var i = len - 1; i >= 0; i--) {
		tmp += str[i];
	}
	return tmp;
}

console.log(reverseString('hello'));

/**
 * 替换某个位置的字符为character
 * @param {string} str
 * @param {number} index
 * @param {string} character
 * @return {string}
 */
function replaceAt(str, index, character) {
    return str.substr(0, index) + character + str.substr(index + character.length);
}

/**
 * @param {string} str
 * @return {string}
 */
function reverseString2(str) {
	var len = str.length;
	var tmp;
	for (var i = 0; i < parseInt(len / 2, 10); i++) {
		tmp = str[i];
		str = replaceAt(str, i, str[len - 1 - i]);
		str = replaceAt(str, len - 1 - i, tmp);
	}
	return str;
}

console.log(reverseString('hello'));

