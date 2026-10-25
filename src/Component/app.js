import { freemem, totalmem } from 'os';

const free = freemem();
const total = totalmem();
const used = total - free;

console.log('Total RAM (GB):', (total / 1024 / 1024 / 1024).toFixed(2));
console.log('Used RAM (GB):', (used / 1024 / 1024 / 1024).toFixed(2));
console.log('Free RAM (GB):', (free / 1024 / 1024 / 1024).toFixed(2));