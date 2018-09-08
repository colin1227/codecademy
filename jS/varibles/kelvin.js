// this is the tempature kelivn.
const kelvin = 293;
let celsius = kelvin - 273;
let fahrenheit = celsius * (9/5) + 32 - 273;
fahrenheit = Math.floor(fahrenheit);
console.log(` the temp is ${fahrenheit} fahrenheit`)