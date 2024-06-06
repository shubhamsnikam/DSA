function postfixToInfix(postfix) {
    let stack = [];

    for (let i = 0; i < postfix.length; i++) {
        let char = postfix[i];

        if (/[a-zA-Z0-9]/.test(char)) {
            stack.push(char);
        } 
        else {
            let operand2 = stack.pop();
            let operand1 = stack.pop();
            let infixExpression = `(${operand1}${char}${operand2})`;
            stack.push(infixExpression);
        }
    }

    return stack.pop();
}

const postfix = "AB+CD-*";
console.log(postfixToInfix(postfix)); 
