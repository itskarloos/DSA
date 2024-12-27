export default function bubble_sort(arr: number[]): void {
    const size = arr.length;
    let temp;
    for (let i = 0; i < size; i++) {
        for (let j = 0; i - j >= 0; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
