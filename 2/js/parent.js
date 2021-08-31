// parent.js
import variable1 from './child.js';
import variable2 from './child.js';
import variable3 from './child.js';

console.log(variable1,variable2,variable3);
setTimeout(()=>console.log(variable1,variable2,variable3));