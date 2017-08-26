Reverse String
========

## 题目描述

> Write a function that takes a string as input and returns the string reversed.
> Example:
> Given s = "hello", return "olleh".

## 解题思路

**思路一：**

最先能想到的思路就是从字符串末尾向前遍历并加到结果字符串中，复杂度为`O(n)`。

```java
class Solution {
    public String reverseString1(String str) {
        String result = "";
        for (int i = str.length() - 1; i >= 0; i--) {
            result += str.charAt(i);
        }

        return result;
    }
}

```

**思路二：**

将字符串首尾字符依次交换即可。相比思路一时间上可以减少一半。

```java
class Solution {
    public String reverseString2(String str) {
        int len = str.length();
        for (int i = 0; i < len / 2; i++) {
            str = swap(str, i, len - i - 1);
        }

        return str;
    }

    public String swap(String str, int i1, int i2) {
        char[] strArr = str.toCharArray();
        char temp = strArr[i1];
        strArr[i1] = strArr[i2];
        strArr[i2] = temp;

        return new String(strArr);
    }
}
```

以上`swap`的过程会比较消耗空间性能，可以优化一下：

```java
class Solution {
    public String reverseString2(String str) {
        char[] strArr = str.toCharArray();
        int i = 0;
        int j = str.length() - 1;

        while (i < j) {
            char temp = strArr[i];
            strArr[i] = strArr[j];
            strArr[j] = temp;
            i++;
            j--;
        }

        return new String(strArr);
    }
}

```

**思路三：**

分治算法，将字符串分为左右两边，依次递归去将左右两边的字符串进行反转，直到字符串长度为1时直接返回字符串。

```java
class Solution {
    public String reverseString3(String str) {
        int len = str.length();
        if (len <= 1) return str;

        int mid = len / 2;
        String leftStr = str.substring(0, mid);
        String rightStr = str.substring(mid, len);

        return reverseString3(rightStr) + reverseString3(leftStr);
    }
}
```

## 思路优化及代码改进

## 总结
