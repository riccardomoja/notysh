import {IteratorFromArray} from './IteratorFromArray';

describe('IteratorFromArray', function () {

  it('instantiated with undefined should not has next and throw error', function (done) {
    const it = new IteratorFromArray(undefined);
    expect(it).toBeDefined();
    expect(it.hasNext()).toBeFalsy();
    done();
  });
  it('instantiated with emptyArray should not has next and throw error', function (done) {
    const it = new IteratorFromArray([]);
    expect(it).toBeDefined();
    expect(it.hasNext()).toBeFalsy();
    done();
  });
  it('instantiated with emptyArray', function (done) {
    const it = new IteratorFromArray([]);
    expect(it).toBeDefined();
    expect(it.hasNext()).toBeFalsy();
    done();
  });
  it('return all elements in right order of array if next() is called enough times and last hasNext() should be false', function (done) {
    const it = new IteratorFromArray([3, 1, 78]);
    expect(it.hasNext()).toBeTruthy();
    expect(it.next()).toBe(3);
    expect(it.hasNext()).toBeTruthy();
    expect(it.next()).toBe(1);
    expect(it.hasNext()).toBeTruthy();
    expect(it.next()).toBe(78);
    expect(it.hasNext()).toBeFalsy();
    done();
  });
  it('with two next() e one previous() should return first element', function (done) {
    const it = new IteratorFromArray([3, 1, 78]);
    expect(it.next()).toBe(3);
    expect(it.previous()).toBe(3);
    done();
  });
  it('if calling previous at the beginning of the iteration should throw NoSuchElementException', function () {
    const it = new IteratorFromArray([3]);
    expect(function() {
      const prev = it.previous();
    }).toThrowError('NoSuchElementException');
  });
  it('if calling next() and it\'s last element should throw NotWellFormedException', function () {
    const it = new IteratorFromArray([3]);
    expect(function() {
      it.next();
      it.next();
    }).toThrowError('NoSuchElementException');
  });
});
