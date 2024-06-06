function infixToPostfix(infix) {
    let precedence = {
        '^': 3,
        '*': 2,
        '/': 2,
        '+': 1,
        '-': 1
    };
    let isOperator = (c) => precedence.hasOwnProperty(c);
    let isHigherPrecedence = (op1, op2) => precedence[op1] > precedence[op2];
    
    let stack = [];
    let output = [];
    
    for (let i = 0; i < infix.length; i++) {
        let char = infix[i];
        
        if (/[a-zA-Z0-9]/.test(char)) {
            output.push(char);
        } else if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                output.push(stack.pop());
            }
            stack.pop(); 
        } else if (isOperator(char)) {
            while (stack.length > 0 && isOperator(stack[stack.length - 1]) && 
                    (isHigherPrecedence(stack[stack.length - 1], char) || 
                    (precedence[stack[stack.length - 1]] === precedence[char] && char !== '^'))) {
                output.push(stack.pop());
            }
            stack.push(char);
        }
    }
    
    while (stack.length > 0) {
        output.push(stack.pop());
    }
    
    return output.join('');
}

const infix = "a+b*(c^d-e)^(f+g*h)-i";
console.log(infixToPostfix(infix)); 
