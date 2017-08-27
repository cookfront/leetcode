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

    public int addDigits2(int num) {
        return num == 0 ? 0 : (num % 9 == 0 ? 9 : num % 9);
    }
}
