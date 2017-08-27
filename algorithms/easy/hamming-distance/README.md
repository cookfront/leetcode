Hamming Distance
========

## 题目描述

> The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
> 
> Given two integers x and y, calculate the Hamming distance.
> 
> Note:
> 0 ≤ x, y < 2^31.

## 解题思路

**思路一：**

对两个整数做`异或`操作得出一个新的整数后，找到这个整数里二进制表示中`1`的数量即可。

```java
class Solution {
    public int hammingDistance(int x, int y) {
        char[] result = Integer.toBinaryString(x ^ y).toCharArray();
        int count = 0;
        for (char c:result) {
            if (Integer.parseInt(c + "") == 1) count++;
        }
        return count;
    }
}
```

上面的代码还慢累赘的，主要还是`Java`不是太熟悉，也是边学`Java`边学习算法。看了讨论里面，只需一行代码解决，思路是一样的：

```java
public class Solution {
    public int hammingDistance(int x, int y) {
        return Integer.bitCount(x ^ y);
    }
}
```

`bitCount`这个函数的作用是返回一个整数里面二进制表示中为`1`的个数。可以看下这篇文章，里面有介绍到`bitCount`的各种实现：[Count Bits of Integer](https://tech.liuchao.me/2016/11/count-bits-of-integer/)

## 总结
