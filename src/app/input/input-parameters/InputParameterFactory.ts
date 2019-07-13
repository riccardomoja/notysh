import {InputParameter} from '../InputParameter';
import {Loopable} from '../../util/Loopable';

export interface InputParameterFactory {
  create(it: Loopable<string>): InputParameter[];
}
