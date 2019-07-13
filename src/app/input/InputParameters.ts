import {InputParameter} from './InputParameter';
import {IteratorFromArray} from '../util/IteratorFromArray';
import {InputParameterFactory} from './input-parameters/InputParameterFactory';

export class InputParameters {
  private parameterList: InputParameter[];
  constructor(
    private readonly args: string[],
    private readonly inputParameterFactory: InputParameterFactory) {
    this.parameterList = [];
    const it = new IteratorFromArray(args);
    while (it.hasNext()) {
      try {
        const paramArr = inputParameterFactory.create(it);
        for (let i = 0; i < paramArr.length; i += 1) {
          this.parameterList.push(paramArr[i]);
        }
      } catch (e) {
        console.log('ERROR:', e);
        throw new Error('NotWellFormedException');
      }
    }
  }
  public toArray(): InputParameter[] {
    return this.parameterList;
  }
}
