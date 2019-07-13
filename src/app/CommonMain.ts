import {CmdInputParameterFactory} from './input/input-parameters/CmdInputParameterFactory';

import {Main} from './Main';
import {InputParameters} from './input/InputParameters';

export class CommonMain implements Main {
  private readonly inputParemeters: InputParameters;
  private readonly nodeExecPath: string;
  private readonly appExecPath: string;
  constructor() {
    this.nodeExecPath = process.argv[0];
    this.appExecPath = process.argv[1];
    this.inputParemeters = new InputParameters(
      process.argv.slice(2),
      new CmdInputParameterFactory({})
    );
  }
  run(): void {
    console.log(this);
  }
}
