/*
why loopable? Iterator interface has one only method:
next(): IteratorResult<T>
but IteratorResult has an empty interface so it is useless
 */

export interface Loopable<T> {
  next(): T;
  hasNext(): boolean;
  previous(): T;
}
