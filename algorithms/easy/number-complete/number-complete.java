class Solution {
    public int findComplement(int num) {
        String binaryString = Integer.toBinaryString(num);
        String result = "";

        for (char c : binaryString.toCharArray()) {
            result += (c == '0') ? '1' : '0';
        }

        System.out.println(Integer.parseInt(result, 2));
    }
}

