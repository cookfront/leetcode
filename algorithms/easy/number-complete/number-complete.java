class Solution {
    public int findComplement1(int num) {
        String binaryString = Integer.toBinaryString(num);
        String result = "";

        for (char c : binaryString.toCharArray()) {
            result += (c == '0') ? '1' : '0';
        }

        return Integer.parseInt(result, 2);
    }

    public int findComplement2(int num) {
        String binaryString = Integer.toBinaryString(num);
        String allOneBit = "";

        for (char c : binaryString.toCharArray()) {
            allOneBit += '1';
        }

        return Integer.parseInt(binaryString, 2) ^ Integer.parseInt(allOneBit, 2);
    }

    public int findComplement3(int num) {
        return num ^ ((Integer.highestOneBit(num) << 1) - 1);
    }
}
