var isValid = function(s) {
    var len = s.length;
    var stack = [];
    var char;
    for (var i = 0; i < len; i++) {
        char = s[i];
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else if (char === ')' || char === ']' || char === '}') {
            switch (char) {
                case ')':
                    if (stack.pop() !== '(') {
                        return false;
                    }
                    break;
                case ']':
                    if (stack.pop() !== '[') {
                        return false;
                    }
                    break;
                case '}':
                    if (stack.pop() !== '{') {
                        return false;
                    }
                    break;
            }
        }
    }

    if (stack.length !== 0) {
        return false;
    }

    return true;
};
