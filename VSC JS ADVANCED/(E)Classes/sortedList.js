class List {
  constructor() {
    this.list = [];
    this.size = 0;
  }

  add(element) {
    this.list.push(element);
    this.list.sort((a, b) => a - b);
    this.size++;
  }

  remove(index) {
    if (index > this.list.length - 1 || index < 0) {
      throw new RangeError();
    }
    this.list.splice(index, 1);
    this.size--;
  }

  get(index) {
    if (index > this.list.length - 1 || index < 0) {
      throw new RangeError();
    }
    return this.list[index];
  }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
