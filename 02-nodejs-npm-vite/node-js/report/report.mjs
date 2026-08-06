import process from 'node:process';

process.report.reportOnFatalError = true;
process.report.reportOnUncaughtException = true;
process.report.reportOnSignal = true;
process.report.filename = "report.json";

const sampleError = (sampleError) => {
    throw new Error('alamak error wak');
};

sampleError();