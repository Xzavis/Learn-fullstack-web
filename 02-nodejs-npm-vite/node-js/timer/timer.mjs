// menggunakan promises harus import timers/promises
import timers from 'timers/promises';

for await (const startTime of timers.setInterval(1000, new Date())) {
    console.info(`Waktu versi promises: ${startTime}`)
};

// set timer function tanpa promise
setInterval(() => {
    console.info(`Waktu: ${new Date()}`)
}, 2000)