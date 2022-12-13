// console.log(global)
// console.log(module)

// const myModule = require('./module/module');
// console.log(myModule)
//==========  OR ==============
// const { num, add } = require('./module/module')

// const sum = add(2, 3);
// // console.log(sum);
// console.log(num);

// To use ES6 feature----we have to use module type in package.json file---------------------

// import {num} from './module/module.js'
// console.log(num)



const os = require('os');
console.log(os.freemem());