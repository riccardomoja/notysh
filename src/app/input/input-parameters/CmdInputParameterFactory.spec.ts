import {CmdInputParameterFactory} from './CmdInputParameterFactory';
import {IteratorFromArray} from '../../util/IteratorFromArray';

describe('CmdInputParameterFactory', function () {
  it('if empty parameter has to be created should throw ParsingException', function () {
    const a = new CmdInputParameterFactory(
      {'-d': {type: 'string'}}
    );
    expect(function() {
      a.create(new IteratorFromArray([]));
    }).toThrowError('ParsingException');
  });
  it('if parameter type is not supported should throw ParameterNotSupportedException', function () {
    const a = new CmdInputParameterFactory(
      {'-d': {type: 'string'}}
    );
    expect(function() {
      a.create(new IteratorFromArray(['+dcoi']));
    }).toThrowError('ParameterNotSupportedException');
  });
  it('must return 1 minus parameter boolean', function () {
    const factory = new CmdInputParameterFactory(
      {'-d': {type: 'boolean'}}
    );
    const params = factory.create(new IteratorFromArray(['-d']));
    expect(params).toBeDefined();
    expect(params.length).toBe(1);
  });
  it('must return 2 minus parameter', function () {
    const factory = new CmdInputParameterFactory(
      {'-d': {type: 'boolean'}, '-a': { type: 'string'}}
    );
    const it = new IteratorFromArray(['-d', '-a', 'test']);
    const param0 = factory.create(it);
    const param1 = factory.create(it);
    expect(param0).toBeDefined();
    expect(param0.length).toBe(1);
    expect(param1).toBeDefined();
    expect(param1.length).toBe(1);
  });
  it('with multiple minus parameters should work', function () {
    const factory = new CmdInputParameterFactory(
      {
        '-d': {type: 'boolean'},
        '-a': {type: 'boolean'},
        '-o': {type: 'boolean'}
      }
    );
    const params = factory.create(new IteratorFromArray(['-dao']));
    expect(params.length).toBe(3);
    expect(params[0].name()).toBe('-d');
    expect(params[1].name()).toBe('-a');
    expect(params[2].name()).toBe('-o');
  });
  it('consecutive calls of different kind of parameters should return hust next parameters', function () {
    const factory = new CmdInputParameterFactory(
      {
        '-d': {type: 'boolean'},
        '-a': {type: 'string'},
        '-o': {type: 'boolean'}
      }
    );
    const params = factory.create(new IteratorFromArray(['-do', '-a', 'foo']));
    expect(params.length).toBe(2);
    expect(params[0].name()).toBe('-d');
    expect(params[0].value()).toBe('true');
    expect(params[1].name()).toBe('-o');
    expect(params[1].value()).toBe('true');
  });
  it('consecutive calls of different kind of parameters should return hust next parameters', function () {
    const factory = new CmdInputParameterFactory(
      {
        '-a': {type: 'string'},
        '-d': {type: 'boolean'},
        '-o': {type: 'boolean'}
      }
    );
    const params = factory.create(new IteratorFromArray(['-a', 'foo', '-do']));
    expect(params.length).toBe(1);
    expect(params[0].name()).toBe('-a');
    expect(params[0].value()).toBe('foo');
  });
});
