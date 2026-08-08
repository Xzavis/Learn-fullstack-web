const bufferEncodingTest = Buffer.from("hello world", "utf8");

console.info(bufferEncodingTest.toString("base64"));
console.info(bufferEncodingTest.toString("hex"));

const bufferEncodingTest2 = Buffer.from("aGVsbG8gd29ybGQ=", "base64url");
console.info(bufferEncodingTest2.toString("ascii"))