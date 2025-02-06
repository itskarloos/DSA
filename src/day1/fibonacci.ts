function fibonacci(num: number, digits: number[]): number {
    if (num === 0) return 0;
    if (num === 1) return 1;

    const result = fibonacci(num - 1, digits) + fibonacci(num - 2, digits);
    digits.push(result); // Track sequence
    return result;
}

let digits: number[] = [];
let result = fibonacci(10, digits);

console.log("Fibonacci(10):", result);
console.log("Sequence:", digits.reverse()); // Reverse to display correctly
