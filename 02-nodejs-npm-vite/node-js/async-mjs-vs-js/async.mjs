function samplePromise() {
    return Promise.resolve("Success");
};

const value = await samplePromise();
console.log(value);