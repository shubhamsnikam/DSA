function evaluatePostfix(expression) {
    let stack = [];

    for (let i = 0; i < expression.length; i++) {
        let char = expression[i];

        if (!isNaN(char)) {
            stack.push(parseInt(char));
        } else {
            let val2 = stack.pop();
            let val1 = stack.pop();

            switch (char) {
                case '+':
                    stack.push(val1 + val2);
                    break;
                case '-':
                    stack.push(val1 - val2);
                    break;
                case '*':
                    stack.push(val1 * val2);
                    break;
                case '/':
                    stack.push(val1 / val2);
                    break;
            }
        }
    }

    return stack.pop();
}

console.log(evaluatePostfix("231*+9-"));
