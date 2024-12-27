export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;
    let mid = Math.floor(low + (high - low) / 2);
    do {
        if (haystack[mid] === needle) {
            console.log(mid);
            return true;
        } else if (haystack[mid] > needle) {
            high = mid;
            mid = Math.floor(low + (high - low) / 2);
        } else if (haystack[mid] < needle) {
            low = mid + 1;
            mid = Math.floor(low + (high - low) / 2);
        }
    } while (low < high);
    return false;
}
