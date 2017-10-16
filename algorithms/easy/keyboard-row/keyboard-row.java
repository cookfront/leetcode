class Solution {
    public String[] findWords(String[] words) {
        List<String> result = new ArrayList<>();

        int oldIndex = -1;
        int newIndex = -1;
        for (String item: words) {
            for (int i = 0; i < item.length(); i++) {
                newIndex = findRow(item.charAt(i));
                if (i > 0 && oldIndex != newIndex) {
                    break;
                }

                oldIndex = newIndex;
                if (i == item.length() - 1) {
                    result.add(item);
                }
            }
            oldIndex = -1;
            newIndex = -1;
        }

        return result.toArray(new String[0]);
    }

    public int findRow(char ch) {
        String keyboardsInfo[] = {"qwertyuiop", "asdfghjkl", "zxcvbnm"};
        for (int i = 0; i < keyboardsInfo.length; i++) {
            if (keyboardsInfo[i].indexOf(Character.toLowerCase(ch)) >= 0) {
                return i;
            }
        }
        return -1;
    }
}