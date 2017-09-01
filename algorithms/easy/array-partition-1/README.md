Array Partition I
========

## 题目描述

> Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

**Example 1:**

```
Input: [1,4,3,2]

Output: 4
Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
```

**Note:**

1. n is a positive integer, which is in the range of [1, 10000].
2. All the integers in the array will be in the range of [-10000, 10000].

## 解题思路

**思路一：**

将数组排序后，数组有`2n`个数组项，将`2i`（i = 0, 1, 2, ..., n）项的数相加之和即为结果。

```java
class Solution {
    public int arrayPairSum(int[] nums) {
        Arrays.sort(nums);
        int sum = 0;
        for (int i = 0; i < nums.length / 2; i++) {
            sum += nums[2 * i];
        }
        return sum;
    }
}
```

## 总结

这道题主要还是需要去发现算法的内在规律，而这道题最快能想到的就是蛮力法，尝试所有的分组，然后找到其中的最大的和，但是算法复杂度会很高。
