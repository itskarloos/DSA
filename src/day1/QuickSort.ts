function qs(arr: number[], lo: number, hi: number): void {
    if (lo >= hi) {
        return;
    }
    const pivotIdx = partition(arr, lo, hi);
    qs(arr, lo, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
}
function partition(arr: number[], lo: number, hi: number): number {
    let pivot = arr[hi];
    let idx = lo - 1;

    for (let i = lo; i < arr[hi]; ++i) {
        if (arr[i] <= pivot) {
            idx++;
            let temp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = temp;
        }
    }

    return idx;
}
export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
