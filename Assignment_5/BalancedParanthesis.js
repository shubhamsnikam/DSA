function isBalanced(expression) {
    const stack = [];
    const brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of expression) {
        if (brackets[char]) {
            stack.push(char);
        } else {
            const last = stack.pop();
            if (brackets[last] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isBalanced("{[()]}")); 
console.log(isBalanced("{[(])}"));
