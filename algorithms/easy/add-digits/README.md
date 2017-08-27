Add Digits
========

## 题目描述

> Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
> 
> For example:
> Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.
> 
> Follow up:
Could you do it without any loop/recursion in O(1) runtime?

## 解题思路

**思路一：**

第一能想到的就是初始化一个为0的整数（`sum = 0`），当`num < 0`时循环的对其求模，并加到`sum`中，并将`num / 10`。循环结束后，我们得到一个`sum`，此时有两种情况，一种情况是`sum >= 10`，需要递归的调用`addDigits`，还有一种情况是`sum < 10`，从而得到我们需要的结果。

```java
class Solution {
    public int addDigits1(int num) {
        if (num < 10) return num;
        int sum = 0;

        while (num > 0) {
            sum += num % 10;
            num = num / 10;
        }

        return sum >= 10 ? addDigits(sum) : sum;
    }
}
```

**思路二：**

这个思路是看了讨论里面的，以`438`为例：

[Step 1]:

```
438 = 40 * 10 + 3 * 10 + 8;

4 + 3 + 8 = 4 * (10 % 9) * (10 % 9) + 3 * (10 % 9) + 8 % 9 = 15;
```

[Step 2]:

```
15 = 1 * 10 + 5;
 
1 + 5 = 1 * (10 % 9) + 5 % 9 = 6;
```

从而得到了我们的答案。我们可以看到其实就是在对`9`取模，需要注意的是`num`为0和9的倍数的情况，这两种情况需要特殊处理下即可。

具体的思路可以看这里：[Digital root](https://en.wikipedia.org/wiki/Digital_root)

```java
class Solution {
    public int addDigits2(int num) {
        return num == 0 ? 0 : (num % 9 == 0 ? 9 : num % 9);
    }
}
```

## 总结

思路二的算法还是蛮奇特的，可以让复杂度立马降到`O(1)`，其实是需要取发现算法的内在特点。
