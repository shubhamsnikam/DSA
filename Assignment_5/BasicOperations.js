const prompt = require('prompt-sync')({sigint: true});

function createStack() {
    const stack = [];

    return {
        push(item) {
            stack.push(item);
        },

        pop() {
            if (this.isEmpty()) {
                throw new Error("pop from empty stack");
            }
            return stack.pop();
        },

        peek() {
            if (this.isEmpty()) {
                throw new Error("peek from empty stack");
            }
            return stack[stack.length - 1];
        },

        isEmpty() {
            return stack.length === 0;
        },

        display() {
            console.log("Stack:", stack);
        }
    };
}

const stack = createStack();
let continueProgram = true;

while (continueProgram) {
    console.log("\nChoose an operation: ");
    console.log("1: Push");
    console.log("2: Pop");
    console.log("3: Peek");
    console.log("4: Check if empty");
    console.log("5: Display stack");
    console.log("6: Exit");

    const choice = prompt("Enter your choice: ");
    
    switch (choice) {
        case '1':
            const item = prompt("Enter the item to push: ");
            stack.push(item);
            console.log(`Pushed ${item} to stack.`);
            break;
        case '2':
            try {
                const poppedItem = stack.pop();
                console.log(`Popped item: ${poppedItem}`);
            } catch (error) {
                console.error(error.message);
            }
            break;
        case '3':
            try {
                const topItem = stack.peek();
                console.log(`Top item: ${topItem}`);
            } catch (error) {
                console.error(error.message);
            }
            break;
        case '4':
            const isEmpty = stack.isEmpty();
            console.log(`Stack is ${isEmpty ? "empty" : "not empty"}.`);
            break;
        case '5':
            stack.display();
            break;
        case '6':
            continueProgram = false;
            console.log("Exiting program.");
            break;
        default:
            console.log("Invalid choice. Please try again.");
    }
}
