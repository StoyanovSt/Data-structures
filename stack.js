class Stack {
  constructor() {
    this.items = {};
    this.front = 0;
  }

  push(element) {
    this.items[this.front] = element;
    this.front++;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty!");
    }

    const item = this.items[this.front];
    delete this.items[this.front];
    this.front--;
    return item;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return Object.keys(this.items).length;
  }

  print() {
    console.log(this.items);
  }
}
