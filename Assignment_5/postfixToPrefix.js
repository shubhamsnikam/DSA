function postfixToPrefix(postfix) {
    let stack = [];

    for (let i = 0; i < postfix.length; i++) {
        let char = postfix[i];

        if (/[a-zA-Z0-9]/.test(char)) {
            stack.push(char);
        } 
        else {
            let operand2 = stack.pop();
            let operand1 = stack.pop();
            let prefixExpression = `${char}${operand1}${operand2}`;
            stack.push(prefixExpression);
        }
    }

    return stack.pop();
}

const postfix = "AB+CD-*";
console.log(postfixToPrefix(postfix)); 
