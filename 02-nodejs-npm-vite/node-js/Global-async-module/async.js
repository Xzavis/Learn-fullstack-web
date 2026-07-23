function samplePromise() {
    return Promise.resolve("Success");
};

async function run() {
    const value = await samplePromise();
    console.log(value);
}

run();