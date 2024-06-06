function infixToPrefix(infix) {
    function isOperator(char) {
        return ['+', '-', '*', '/', '^'].includes(char);
    }

    function getPrecedence(operator) {
        switch (operator) {
            case '+':
            case '-':
                return 1;
            case '*':
            case '/':
                return 2;
            case '^':
                return 3;
            default:
                return 0;
        }
    }

    function reverseAndSwap(expression) {
        let reversed = expression.split('').reverse().join('');
        let swapped = reversed.split('').map(char => {
            if (char === '(') return ')';
            if (char === ')') return '(';
            return char;
        }).join('');
        return swapped;
    }

    function infixToPostfix(infix) {
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
                        (getPrecedence(stack[stack.length - 1]) > getPrecedence(char) || 
                        (getPrecedence(stack[stack.length - 1]) === getPrecedence(char) && char !== '^'))) {
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

    let reversedAndSwappedInfix = reverseAndSwap(infix);

    let postfix = infixToPostfix(reversedAndSwappedInfix);

    let prefix = postfix.split('').reverse().join('');

    return prefix;
}

const infix = "a+b*(c^d-e)^(f+g*h)-i";
console.log(infixToPrefix(infix)); 
