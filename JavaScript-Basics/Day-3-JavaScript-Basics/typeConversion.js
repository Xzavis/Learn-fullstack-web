// Latihan Hari 3: Type Casting & Type Conversion


// Converting Strings to Numbers
// menggunakan Global Method Number()
let inputAge = "30";
console.log(`Konversi String ke Number: ${Number(inputAge)} tipe data setelah di konversikan: ${typeof Number(inputAge)}`);

// Ubah String ke Number menggunakan Unary Plus (+)
let angka = "3.14";
console.log(`Konversi String ke Number: ${+angka} dan tipe datanya adalah: ${typeof +angka}`);

// NaN (Not a Number) terjadi ketika konversi gagal
let invalidNumber = "abc";
console.log(`Konversi String ke Number: ${Number(invalidNumber)} tipe datanya adalah: ${typeof Number(invalidNumber)}`);

// parsing String ke Number menggunakan parseInt() dan parseFloat()
// mengubah String menjadi bilangan bulat (Integer) menggunakan parseInt()
let intString = "42";
console.log(`Konversi String ke Number menggunakan parseInt(): ${parseInt(intString)} tipe datanya adalah: ${typeof parseInt(intString)}`);

// mengubah String menjadi bilangan desimal (Float) menggunakan parseFloat()
let floatString = "3.14";
console.log(`Konversi String ke Number menggunakan parseFloat(): ${parseFloat(floatString)} tipe datanya adalah: ${typeof parseFloat(floatString)}`);


// Converting Numbers to Strings()
let x = 42;
console.log(`Konversi Number ke String: ${String(x)} tipe datanya: ${typeof String(x)}`);
let y = x.toString();
console.log(`Konversi Number ke String menggunakan toString(): ${y} tipe datanya: ${typeof y}`);
let expression = x + 10;
console.log(`Konversi Number ke String: ${String(expression)} tipe datanya: ${typeof String(expression)}`);



// Converting Dates to Numbers

let date1 = new Date("2024-01-01");
console.log(`Konversi Date ke Number: ${Number(date1)} tipe datanya: ${typeof Number(date1)}`);



// Converting Date toString()
let date2 = new Date();
console.log(`waktu saat ini: ${date2.toString()}`);




// Converting Booleans to Numbers
numberTrue = Number(true);
numberFalse = Number(false);
console.log(`Konversi Boolean ke Number: ${numberTrue} tipe datanya: ${typeof numberTrue}`);
console.log(`Konversi Boolean ke Number: ${numberFalse} tipe datanya: ${typeof numberFalse}`);

// Converting Numbers to Booleans
let num1 = 5;
let num2 = 0;
console.log(`Konversi Number ke Boolean: ${Boolean(num1)} tipe datanya: ${typeof Boolean(num1)}`);
console.log(`Konversi Number ke Boolean: ${Boolean(num2)} tipe datanya: ${typeof Boolean(num2)}`);
