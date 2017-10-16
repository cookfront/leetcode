Reverse Words in a String III
========

## 题目描述

Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

**Example 1:**

```
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
```

Note: In the string, each word is separated by single space and there will not be any extra space in the string.

## 解题思路

**思路一**

首先将字符串用空格分成单个的单词，然后对每个单词进行反转操作。

```java
class Solution {
    public String reverseWords(String s) {
        String characters[] = s.split(" ");
        for (int i = 0; i < characters.length; i++) {
            characters[i] = new StringBuilder(characters[i]).reverse().toString();
        }
        return String.join(" ", characters);
    }
}
```

## 总结
