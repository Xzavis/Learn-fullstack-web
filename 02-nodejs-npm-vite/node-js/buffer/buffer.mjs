import { Buffer } from 'node:buffer';

const bufferTest = Buffer.from("Hello World");
console.info(bufferTest.toString());
console.info(bufferTest);

bufferTest.reverse();
console.info(bufferTest);