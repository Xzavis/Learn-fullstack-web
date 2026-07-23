import path from 'node:path';

// Simulasi Input Path Berkas yang diunggah oleh Pnegguna dari sistem os mana saja
const rawFilePath = "uploads//user_data/documents/financial_report_2026.PDF";
const sourceDir = "/var/www/app/temp";
const targetDir = "storage/archive";

console.info(`=== DEMO MODUL PATH NODE JS ===\n`);

// 1 path.normalize()
// Tujuan: Untuk membersihkan jalur berkas dari slash yan berlebihan atau format yang berantakan
const cleanPath = path.normalize(rawFilePath);
console.info(`Raw Path          : ${rawFilePath}`);
console.info(`1. Clean Path     : ${cleanPath}`);

// 2 path.basename()
// Tujuan: Untuk mendapatkan nama berkas (beserta ekstensinya)
const fileName = path.basename(cleanPath);
console.info(`2. File Name      : ${fileName}`);

const fileNameWithoutExt = path.basename(cleanPath, '.PDF');
console.info(`2. File Name (NonExt): ${fileNameWithoutExt}`);

// 3. path.extname()
// Tujuan: Memeriksa ekstensi berkas (berguna untuk validasi tipe file)
const fileExt = path.extname(cleanPath).toLowerCase();
console.info(`3. File Extension : ${fileExt}`)

// 4. path.dirname()
// Tujuan Mengambil jalur direktori induk dari file
const dirLocation = path.dirname(cleanPath);
console.info(`4. Directory      : ${dirLocation}`);

// 5. path.parse()
// Tujuan Memecah seluruh elemen jalur menjadi objek terstruktur yang mudah dibaca
const parsedPath = path.parse(cleanPath);
console.log('5. Parsed Object:', parsedPath);

// 6. path.join()
// Tujuan Menggabungkan segmen direktori secara aman sesuai OS tempat app berjalan
const relativeDestination = path.join(targetDir, parsedPath.dir, `${parsedPath.name}_processed${parsedPath.ext.toLowerCase()}`);
console.info(`6. Final Archive Path : ${relativeDestination}`);

// 7. path.resolve()
// Tujuan: Untuk mengubah jalur relatif menjadi jalur absolut berdasarkan lokasi folder kerja saat ini
const absoluteDestination = path.resolve(sourceDir, relativeDestination);
console.info(`7. Absolute Path      : ${absoluteDestination}`);

// 8. path.isAbsolute()
// Memastikan apakah sebuah path bersifat absolut
console.info(`8. is Absolute Path   : ${path.isAbsolute(absoluteDestination)}`);

// 9. path.matchesGlob().
// Memeriksa apakah berkas sesuai dengan pola tertentu (fitur baru Node.js)
const isPdf = path.matchesGlob(cleanPath.toLowerCase(), '**/*.PDF');
console.info(`9. Matches Glob (*.PDF): ${isPdf}`);