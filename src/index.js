import './style.css';
import { sum } from './math.js';
import { multiply as myFn } from './math.js';
document.write('Hello, webpack!');
console.log( sum(1,2) );
console.log( myFn(4) );

/// Другой вариант импорта:
// import * as math from './math.js';
// console.log( math.multiply(5) );   
// console.log( math.sum(1,2) );