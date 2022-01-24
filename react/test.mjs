import { compose } from "redux";

const makeLouder = (string) => string.toUpperCase();
const repeatThreeTimes = (string) => string.repeat(3);
const embolden = (string) => string.bold();
const result = embolden(repeatThreeTimes(makeLouder("hello")));
// console.log(result);

console.log(compose(embolden, repeatThreeTimes, makeLouder)("hello"));
