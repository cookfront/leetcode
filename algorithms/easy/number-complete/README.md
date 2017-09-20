Number Complete
========

## 题目描述

> Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

** Note:**

1. The given integer is guaranteed to fit within the range of a 32-bit signed integer.
2. You could assume no leading zero bit in the integer’s binary representation.

**Example 1:**

```
Input: 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
```

**Example 2:**

```
Input: 1
Output: 0
Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
```

## 解题思路

**思路一：**

比较粗暴的就是首先将数字转换成二进制表示的字符串，然后字符串后依次遍历每个字符，遇到`0`转换为`1`，遇到`1`就转换为`0`，最后输出该结果字符串的十进制数字表示。

```java
class Solution {
    public int findComplement(int num) {
        String binaryString = Integer.toBinaryString(num);
        String result = "";

        for (char c : binaryString.toCharArray()) {
            result += (c == '0') ? '1' : '0';
        }

        return Integer.parseInt(result, 2);
    }
}
```

**思路二：**

首先找到数字的二进制表示，然后生成对应位作全是`1`的数字进行异或操作。以`10`为例：

```
10
1010 // binary
1111
0101 // result
```

## 总结
