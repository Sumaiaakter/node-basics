// const os = require('os');// os means operating system

// console.log(os.arch())
// console.log(os.cpus())
// console.log(os.freemem())
// console.log(os.homedir())
// console.log(os.hostname())
// console.log(os.networkInterfaces())
// console.log(os.totalmem())

const fs = require('fs')

const stat = fs.fstatSync('./2.path-module.js')
console.log(stat)