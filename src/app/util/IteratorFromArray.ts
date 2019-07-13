import {Loopable} from './Loopable';

export class IteratorFromArray<T> implements Loopable<T> {
  private index = 0;
  constructor(private data: T[]) {
    if (!data) {
      this.data = [];
    }
  }
  hasNext(): boolean {
    return this.index < this.data.length;
  }
  next(): T {
    if (this.index === this.data.length) {
      throw new Error('NoSuchElementException');
    }
    const res = this.data[this.index];
    this.index += 1;
    return res;
  }
  previous(): T {
    if (this.index === 0) {
      throw new Error('NoSuchElementException');
    }
    this.index -= 1;
    return this.data[this.index];
  }
}
