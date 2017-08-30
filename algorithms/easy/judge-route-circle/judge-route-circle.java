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
