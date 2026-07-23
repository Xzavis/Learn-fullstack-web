// import filesystem dengan memanggil fs

// import fs from 'node:fs'; // untuk synchronous
import fs from 'node:fs/promises'; // untuk asynchronous await

const buffer = await fs.readFile("../os/os.mjs");
console.info(buffer.toString());

// membuat file temp dan menulis hello node js
await fs.writeFile("temp.txt", "Hello Node JS");