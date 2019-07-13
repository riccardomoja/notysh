import {InputParameters} from './InputParameters';
import {CmdInputParameterFactory} from './input-parameters/CmdInputParameterFactory';
import {CmdInputConfiguration} from './CmdInputConfiguration';

describe('InputParameters', function () {
  const complexCmdParameters: CmdInputConfiguration = {
    '-d': {type: 'string'},
    '-a': {type: 'boolean'},
    '-t': {type: 'boolean'},
    '-s': {type: 'string'},
    '-v': {type: 'boolean'},
    '-x': {type: 'boolean'},
    '-b': {type: 'boolean'},
  };
  it('should create the right number of parameters: empty array are 0 parameters', function (done) {
    const parameters = new InputParameters(
      [],
      new CmdInputParameterFactory({d: {type: 'boolean'}}),
    );
    expect(parameters.toArray().length).toBe(0);
    done();
  });
  it('should create 0 parameters if 0 args are provided and no configuration is set', function (done) {
    const parameters = new InputParameters(
      [],
      new CmdInputParameterFactory({}),
    );
    expect(parameters.toArray().length).toBe(0);
    done();
  });
  it('should throw NotWellFormedException if arguments are wrong', function (done) {
    expect(function() {const a = new InputParameters(
      ['-d'],
      new CmdInputParameterFactory({d: {type: 'boolean'}})
    );
    }).toThrowError('NotWellFormedException');
    done();
  });
  it('should create parameters array with at least 1 arg', function () {
    const parameters = new InputParameters(
      ['-d', 'pippo'],
      new CmdInputParameterFactory({'-d': {type: 'string'}})
    );
    expect(parameters.toArray().length).toBe(1);
  });
  it('if 0 parameters should not throw exception', function () {
    const parameters = new InputParameters(
      [],
      new CmdInputParameterFactory({})
    );
    expect(parameters.toArray().length).toBe(0);
  });
  it('if multiple cmd input defined & 1, should create right parameters', function () {
    const parameters = new InputParameters(
      ['-v' ],
      new CmdInputParameterFactory(complexCmdParameters)
    );
    expect(parameters.toArray().length).toBe(1);
  });
  it('if multiple cmd input defined & 2, should create right parameters', function () {
    const parameters = new InputParameters(
      ['-vx' ],
      new CmdInputParameterFactory(complexCmdParameters)
    );
    expect(parameters.toArray().length).toBe(2);
    expect(parameters.toArray()[0].name()).toBe('-v');
    expect(parameters.toArray()[1].name()).toBe('-x');
  });
  it('if multiple cmd input defined & 3, should create right parameters', function () {
    const parameters = new InputParameters(
      ['-vx', '-s', 'filename.txt' ],
      new CmdInputParameterFactory(complexCmdParameters)
    );
    expect(parameters.toArray().length).toBe(3);
    expect(parameters.toArray()[0].name()).toBe('-v');
    expect(parameters.toArray()[1].name()).toBe('-x');
    expect(parameters.toArray()[2].name()).toBe('-s');
    expect(parameters.toArray()[2].value()).toBe('filename.txt');
  });
});
