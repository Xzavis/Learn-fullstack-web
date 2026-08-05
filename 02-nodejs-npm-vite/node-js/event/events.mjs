import { EventEmitter } from "node:events";

const emmiter = new EventEmitter();

emmiter.addListener("hello", (name) => {
    console.info(`hello ${name}`);
});
emmiter.emit("hello", "John")