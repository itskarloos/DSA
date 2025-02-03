type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    public head?: Node<T>;
    public tail?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        if (!this.head) {
            const node = { value: item } as Node<T>;
            this.head = this.tail = node;
            this.length++;
        }
        const oldHead = this.head;
        const head = { value: item } as Node<T>;
        this.head = head;
        this.head.next = oldHead;
    }
    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        const head = this.head;
        head.next = undefined;
        this.length--;
        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
