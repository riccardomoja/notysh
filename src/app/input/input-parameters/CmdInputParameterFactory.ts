import {InputParameterFactory} from './InputParameterFactory';
import {Loopable} from '../../util/Loopable';
import {InputParameter} from '../InputParameter';
import {CmdInputConfiguration} from '../CmdInputConfiguration';
import {SimpleMinusInputParameter} from './SimpleMinusInputParameter';
import {IteratorFromArray} from '../../util/IteratorFromArray';

export class CmdInputParameterFactory implements InputParameterFactory {
  constructor(private config: CmdInputConfiguration) {}
  create(it: Loopable<string>): InputParameter[] {
    if (!it.hasNext()) {
      throw new Error('ParsingException');
    }
    const current = it.next();
    if (current.length === 2 && current.indexOf('-') === 0) {
      return this.createSimpeMinusParameter(current, it);
    }
    if (current.length > 2 && current.indexOf('-') === 0) {
      return this.createMultipleMinusParameter(current, it);
    }
    throw new Error('ParameterNotSupportedException');
  }
  private createSimpeMinusParameter(current: string, it: Loopable<string>): InputParameter[] {
    return [new SimpleMinusInputParameter(current, this.config, it)];
  }
  private createMultipleMinusParameter(current: string, it: Loopable<string>): InputParameter[] {
    const parameterObjects = [];
    const paramsArray = current.slice(1).split('');
    for (let i = 0; i < paramsArray.length; i += 1) {
      const tmpParam = `-${paramsArray[i]}`;
      parameterObjects.push(
        ...this.create(
          new IteratorFromArray([tmpParam])
        )
      );
    }
    return parameterObjects;

  }
}
