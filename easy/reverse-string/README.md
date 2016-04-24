Reverse String
========

第一想到的：

```js
function reverseString(str) {
	var len = str.length;
	var tmp = '';
	for (var i = len - 1; i >= 0; i--) {
		tmp += str[i];
	}
	return tmp;
}
````

首尾不断交换：

```js
function replaceAt(str, index, character) {
    return str.substr(0, index) + character + str.substr(index + character.length);
}

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
```