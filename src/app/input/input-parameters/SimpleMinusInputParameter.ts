import {InputParameter} from '../InputParameter';
import {Loopable} from '../../util/Loopable';
import {CmdInputConfiguration} from '../CmdInputConfiguration';

export class SimpleMinusInputParameter implements InputParameter {
  private readonly mName: string;
  private readonly mValue: string;
  constructor(
    private paramName: string,
    private config: CmdInputConfiguration,
    private readonly paramIterator: Loopable<string>
  ) {
    if (!paramName || !config[paramName]) {
      throw new Error('ParsingException');
    } else if (
        config[paramName] &&
        config[paramName].type === 'string' &&
        !paramIterator.hasNext()) {
      throw new Error('ParsingException');
    }
    this.mName = paramName;
    const type = config[this.mName].type;
    if ( type === 'boolean') {
      this.mValue = 'true';
    } else if (type === 'string' && paramIterator.hasNext()) {
      this.mValue = paramIterator.next();
    }
  }
  name(): string {
    return this.mName;
  }

  value(): string {
    return this.mValue;
  }

}
