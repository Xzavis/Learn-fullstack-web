// Type	        Description
// String	    A text of characters enclosed in quotes
// Number	    A number representing a mathematical value
// Bigint	    A number representing a large integer
// Boolean	    A data type representing true or false
// Object	    A collection of key-value pairs of data
// Undefined	A primitive variable with no assigned value
// Null	        A primitive value representing object absence
// Symbol	    A unique and primitive identifier

//string
let nama = "John Doe";
console.log(`nama: ${nama} tipe data:${typeof nama}`); // Output: nama: John Doe

// number
let umur = 30;
console.log(`umur: ${umur} tipe data:${typeof umur}`); // Output: umur: 30 tipe data: number

//bigInt 
let bigNumber = 1234567890123456789012345678901234567890n; 
console.log(`bigNumber: ${bigNumber} tipe data:${typeof bigNumber}`); // Output: bigNumber: 1234567890123456789012345678901234567890n tipe data: bigint

// Boolean
let isStudent = true;
console.log(`apakah anda seorang mahasiswa? ${isStudent} tipe data:${typeof isStudent}`)

// data object
let person = {
    name: "John Doe",
    age: 30,
    isStudent: true
} 
console.log(`person: ${JSON.stringify(person)} tipe data:${typeof person}`);

// Undefined
let alamat;
console.log(`alamat: ${alamat} tipe data: ${typeof alamat}`);

// Null
let nilaiNull = null;
console.log(`nilai Null: ${nilaiNull} tipe data: ${typeof nilaiNull}`);

// Symbol
let id = Symbol("id");
console.log(`id: {id.toString()} tipe data: ${typeof id}`);