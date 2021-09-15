interface Stack<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

type StackNode<T> = {
  readonly value: T;
  readonly next?: StackNode<T>;
};

class StackImpl<T> implements Stack<T> {
  private _size: number = 0;
  private head?: StackNode<T>;

  get size() {
    return this._size;
  }

  constructor(private capacity: number) {}

  push(value: T) {
    if (this.size === this.capacity) throw new Error("Stack is Full!");
    const node: StackNode<T> = { value, next: this.head };
    this.head = node;
    this._size++;
  }

  pop() {
    // null == undefined, null !== undefined
    if (this.head == null) throw new Error("Stack is Empty!");
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl<string>(10);
stack.push("🍎");
stack.push("🍌");
stack.push("🥑");
stack.push("🍉");
while (stack.size !== 0) {
  console.log(stack.pop());
}

const stack2 = new StackImpl<number>(10);
stack2.push(12);
stack2.push(34);
stack2.push(56);
stack2.push(78);
while (stack2.size !== 0) {
  console.log(stack2.pop());
}
