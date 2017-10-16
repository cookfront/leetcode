Keyboard Row
========

## 题目描述

> Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

![](https://leetcode.com/static/images/problemset/keyboard.png)

**Example 1:**

```
Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]
```

**Note:**

1. You may use one character in the keyboard more than once.
2. You may assume the input string will only contain letters of alphabet.

## 解题思路

**思路一：**

最快能想到的思路就是将键盘每一行的字母放在一个数组中，然后几行键盘的字母组成一个二维数组。对于输入的字母，依次去判断每个字符在键盘数据中的索引，如果和前一个索引不一致则为`false`，否则为`true`。

```java
class Solution {
    public String[] findWords(String[] words) {
        List<String> result = new ArrayList<>();

        int oldIndex = -1;
        int newIndex = -1;
        for (String item: words) {
            for (int i = 0; i < item.length(); i++) {
                newIndex = findRow(item.charAt(i));
                if (i > 0 && oldIndex != newIndex) {
                    break;
                }

                oldIndex = newIndex;
                if (i == item.length() - 1) {
                    result.add(item);
                }
            }
            oldIndex = -1;
            newIndex = -1;
        }

        return result.toArray(new String[0]);
    }

    public int findRow(char ch) {
        String keyboardsInfo[] = {"qwertyuiop", "asdfghjkl", "zxcvbnm"};
        for (int i = 0; i < keyboardsInfo.length; i++) {
            if (keyboardsInfo[i].indexOf(Character.toLowerCase(ch)) >= 0) {
                return i;
            }
        }
        return -1;
    }
}
```

该思路的问题就是时间复杂度太高了，达到了`O(n^3)`。

**思路二：**


