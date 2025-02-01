const window = [1, 1, 0, 1, 1, 1];

export function slidingWindow(window: number[]): number {
    const windows = window;
    let frequencies: number[] = [];
    let frequency = 0;

    for (let i = 0; i < windows.length; ++i) {
        if (windows[i] === 1) {
            // Assuming you're counting consecutive `1`s
            frequency++;
        } else {
            frequencies.push(frequency);
            frequency = 0;
        }
    }

    // Push the last frequency if the window ends with consecutive ones
    if (frequency > 0) {
        frequencies.push(frequency);
    }

    // Return the maximum frequency
    return Math.max(...frequencies);
}

const data = slidingWindow(window);
console.log(data);
