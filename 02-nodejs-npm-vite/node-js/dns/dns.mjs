import dns from 'node:dns/promises';

const testing = await dns.lookup("www.example.com");

console.info(testing.address);
console.info(testing.family);

const localHostSSH = await dns.lookupService('127.0.0.1', 22);
console.info(`Hostname: ${localHostSSH.hostname} |  Service: ${localHostSSH.service}`)