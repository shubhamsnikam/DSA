function nextGreaterElement(arr) {
    const result = new Array(arr.length).fill(-1);
    const stack = [];

    arr.forEach((currentElement, i) => {
        while (stack.length && currentElement > arr[stack[stack.length - 1]]) {
            const index = stack.pop();
            result[index] = currentElement;
        }
        stack.push(i);
    });

    return result;
}

console.log(nextGreaterElement([9, 1, 7, 3, 5])); 
console.log(nextGreaterElement([2, 5, 1, 8]));   
