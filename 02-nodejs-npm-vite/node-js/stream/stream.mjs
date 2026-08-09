import fs from 'node:fs';

// create dan menulis stream
const menulis = fs.createWriteStream("stream.log");
menulis.write("1. ini adalah Baris \n");
menulis.write("2. ini adalah Baris Kedua\n");
menulis.write("3. ini adalah Baris Ketiga\n");
menulis.end(); // Gunakan end() untuk menandakan penulisan data selesai

// Membaca file hanya setelah proses penulisan selesai ('finish')
menulis.on('finish', () => {
    const membaca = fs.createReadStream("stream.log");
    
    membaca.on("data", (data) => {
        console.info(data.toString())
    });

    membaca.on('end', () => {
        console.info("udah dibaca nih");
    });
});

