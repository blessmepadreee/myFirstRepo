let num = 266219;
let num1 = String(num);
console.log(typeof num1);
let split = num1.split("").map(Number);
let num3 = split[0] + split[1] + split[2] + split[3] + split[4] + split[5];
console.log(num3);
let step = num3 ** 3;
let splitstep = step.split("").map(Number);
console.log(splitstep);

