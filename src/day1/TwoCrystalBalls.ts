export default function two_crystal_balls(breaks: boolean[]): number {
    const floors = breaks.length;
    const steps = Math.floor(Math.sqrt(floors));
    for (let i = 0; i < floors; i += steps) {
        if (breaks[i]) {
            i -= steps;
            for (let j = 0; j < steps && i - j >= 0; j++) {
                if (breaks[i + j]) {
                    return i + j;
                }
            }
        }
    }
    return -1;
}
