class Solution {
    public String reverseWords(String s) {
        String characters[] = s.split(" ");
        for (int i = 0; i < characters.length; i++) {
            characters[i] = new StringBuilder(characters[i]).reverse().toString();
        }
        return String.join(" ", characters);
    }
}
