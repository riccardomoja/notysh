import {SimpleMinusInputParameter} from './SimpleMinusInputParameter';
import {IteratorFromArray} from '../../util/IteratorFromArray';

describe('SimpleMinusInputParameter', function () {
  it('should throw ParsingException if it s string and no param is provided', function () {
    expect(function() {
      const a = new SimpleMinusInputParameter(
        '-d',
        {'-d': {type: 'string'}},
        new IteratorFromArray([])
      );
    }).toThrowError('ParsingException');
  });
  it('should throw ParsingException if parameter is not in config', function () {
    expect(function() {
      const a = new SimpleMinusInputParameter(
        '-k',
        {'-d': {type: 'string'}},
        new IteratorFromArray([])
      );
    }).toThrowError('ParsingException');
  });

  it('must manage boolean parameter with minus', function () {
      const a = new SimpleMinusInputParameter(
        '-d',
        {'-d': {type: 'boolean'}},
        new IteratorFromArray(['should not be parsed', 'this too'])
      );
      expect(a.name()).toBe('-d');
      expect(a.value()).toBe('true');
  });
  it('must manage boolean parameter with minus with 0 parameters left', function () {
      const a = new SimpleMinusInputParameter(
        '-d',
        {'-d': {type: 'boolean'}},
        new IteratorFromArray([])
      );
      expect(a.name()).toBe('-d');
      expect(a.value()).toBe('true');
  });
  it('must manage string parameter with minus', function () {
    const paramString = 'this should be parsed';
    const a = new SimpleMinusInputParameter(
      '-d',
      {'-d': {type: 'string'}},
      new IteratorFromArray([paramString, 'this too'])
    );
    expect(a.name()).toBe('-d');
    expect(a.value()).toBe(paramString);
  });
});
