type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    public head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = { value: item } as Node<T>;
        node.next = this.head;
        this.head = node;
        this.length++;
    }
    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);
        if (!this.head) {
            return undefined;
        }
        const head = this.head;
        this.head = this.head.next;
        head.next = undefined;

        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
