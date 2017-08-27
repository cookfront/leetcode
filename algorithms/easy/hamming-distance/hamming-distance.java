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
