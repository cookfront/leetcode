class Solution {
    public String reverseString1(String str) {
        String result = "";
        for (int i = str.length() - 1; i >= 0; i--) {
            result += str.charAt(i);
        }

        return result;
    }

    public String reverseString2(String str) {
        char[] strArr = str.toCharArray();
        int i = 0;
        int j = str.length() - 1;

        while (i < j) {
            char temp = strArr[i];
            strArr[i] = strArr[j];
            strArr[j] = temp;
            i++;
            j--;
        }

        return new String(strArr);
    }

    public String reverseString3(String str) {
        int len = str.length();
        if (len <= 1) return str;

        int mid = len / 2;
        String leftStr = str.substring(0, mid);
        String rightStr = str.substring(mid, len);

        return reverseString3(rightStr) + reverseString3(leftStr);
    }
}
