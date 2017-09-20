class Solution {
    public int findComplement1(int num) {
        String binaryString = Integer.toBinaryString(num);
        String result = "";

        for (char c : binaryString.toCharArray()) {
            result += (c == '0') ? '1' : '0';
        }

        return Integer.parseInt(result, 2);
    }

    public int findComplement2(int num) {}
}

