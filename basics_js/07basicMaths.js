const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString());              //String = 100;
console.log(balance.toString().length);       //String length = 3;

console.log(balance.toFixed(2));              //fixed to 2 digit after decimal. // mainly used in E-commerce
 
const anotherNum = 2494.781;
console.log(anotherNum.toPrecision(4));

const NewNum = 100000;
console.log(NewNum.toLocaleString('en-IN'));

//////////////////////*************** *///////////////////************* */

// Maths Function

console.log(Math);
console.log(Math.PI);
console.log(Math.ceil(4.88));
console.log(Math.floor(45.55));
console.log(Math.round(4.5));
console.log(Math.max(12,13,14,10));
console.log(Math.min(12,10,17,14));


console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10)+1));
const min = 10;
const max = 20;
console.log(Math.floor((Math.random()*10)+min));

