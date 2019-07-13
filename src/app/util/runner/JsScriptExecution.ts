const childProcess = require('child_process');
import {ScriptExecution} from './ScriptExecution';

export class JsScriptExecution implements ScriptExecution {
  constructor(private path: string) {}
  execute(): Promise<number> {
    console.log(this);
    return new Promise(((resolve, reject) => {
      let invoked = false;
      const process = childProcess.fork(this.path);

      process.on('error', function (err) {
        if (invoked) {
          return;
        }
        invoked = true;
        reject(err);
      });

      // execute the callback once the process has finished running
      process.on('exit', function (code) {
        if (invoked) {
          return;
        }
        invoked = true;
        // const err = code === 0 ? null : new Error(`exit code  ${code}`);
        resolve(code);
      });

    }));
  }
}
