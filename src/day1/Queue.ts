type Node<T> = {
    value: T;
    next?: Node<T>;
};
export default class Queue<T> {
    public length: number;
    public head?: Node<T>;
    public tail?: Node<T>;

    constructor() {
        this.tail = this.head = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        if (this.length === 0) {
            const node = { value: item } as Node<T>;
            this.length++;
            this.head = this.tail = node;
            return;
        }
        const node = { value: item } as Node<T>;
        this.tail?.next = node;
        this.tail = node;
        this.length++;
    }
    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;
        const head = this.head;
        this.head = this.head.next;
        head.next = undefined;
        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
