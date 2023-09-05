class Stringer {
  constructor(s, l) {
    this.innerString = s;
    this.innerLength = l;
  }

  increase(length) {
    this.innerLength += length;
  }

  decrease(length) {
    if (this.innerLength - length < 0) {
      this.innerLength = 0;
    } else {
      this.innerLength -= Number(length);
    }
  }

  toString() {
    if (this.innerString.length > this.innerLength) {
      let tempStr = "";
      for (let i = 0; i < this.innerLength; i++) {
        tempStr += this.innerString[i];
      }
      return (tempStr += "...");
    } else if (this.innerLength === 0) {
      return "...";
    } else {
      return this.innerString;
    }
  }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...
test.increase(4);
console.log(test.toString()); // Test
