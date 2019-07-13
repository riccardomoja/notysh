import {CommonMain} from './CommonMain';
import {JsScriptExecution} from './util/runner/JsScriptExecution';
const process = require('process');

const main = new CommonMain();
try {
  main.run();
  // const a = new JsScriptExecution('./test.js');
  // a.execute().then((code: number) => {
  //   console.log(code);
  // });
} catch (e) {
   process.exit(1);
}
