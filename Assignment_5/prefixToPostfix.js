function prefixToPostfix(prefix) {
    let stack = [];

    for (let i = prefix.length - 1; i >= 0; i--) {
        let char = prefix[i];

        if (/[a-zA-Z0-9]/.test(char)) {
            stack.push(char);
        } 

        else {
            let operand1 = stack.pop();
            let operand2 = stack.pop();
            let postfixExpression = `${operand1}${operand2}${char}`;
            stack.push(postfixExpression);
        }
    }

    return stack.pop();
}

const prefix = "*+AB-CD";
console.log(prefixToPostfix(prefix)); 
