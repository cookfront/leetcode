Judge Route Circle
========

## 题目描述

> Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to **the original place**.

> The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.

## 解题思路

这道题是需要判断字符串中的`U`和`D`数量，且`L`和`R`的数量是否一样。

**思路一：**

可以利用两个栈，一个栈存放`U`和`D`，一个栈存放`L`和`R`，栈为空时入栈，当遇到栈顶和当前字符不一样时，对应栈出栈一个元素。当字符串遍历完时两个栈不为空时就没有`circle`，否则有圆。

看了一下讨论，栈对于这个题目有点大材小用了。可以利用两个变量即可，遇到`U`和`L`就分别加1，遇到`D`和`R`就分别减1，当两个变量都为0时，即为`true`。

```java
class Solution {
    public boolean judgeCircle(String moves) {
        int vertical = 0;
        int horizontal = 0;
        for (char c : moves.toCharArray()) {
            if (c == 'U') vertical++;
            if (c == 'D') vertical--;
            if (c == 'L') horizontal++;
            if (c == 'R') horizontal--;
        }

        return horizontal == 0 && vertical == 0;
    }
}
```

## 总结

遇到问题需要选择合适的数据结构，像这里如果利用栈虽然可以解决问题，但把问题复杂化了。
