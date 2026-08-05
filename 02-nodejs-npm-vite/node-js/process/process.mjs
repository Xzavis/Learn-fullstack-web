import process from 'node:process';

process.addListener("exit", (exitCode) => {
    console.info(`NodeJS Exit with code ${exitCode}`);
});

console.info(process.version);
console.table(process.argv);
// console.table(process.report);
// console.info(process.env);

process.exit(0);
