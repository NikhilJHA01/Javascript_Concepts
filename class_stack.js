class Stack {
  // let stack={};

  constructor() {
    this.array = [];
  }
  push(element) {
    this.array.push(element);
  }
  pop(element) {
    if (this.array.length > 0) return this.array.shift(element);
    else throw new Error("NO element to be poped");
  }
  peek() {
    if (this.array.length > 0) return this.array[this.array.length - 1];
    else throw new Error("NO element to be peeked");

    //   console.log(this.array.splice(-1));
  }
  count() {
    return this.array.length;
  }
}
const stack = new Stack();
