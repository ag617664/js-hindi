"use strict"

let score=30
let scor="30"
let s="30abc"

console.log(typeof score);
console.log(typeof scor);


let valueInNumber=Number(scor);
let v=Number(s) //number me convert hojayega lekin NaN dega.
console.log(typeof valueInNumber);

//null likhne par 0 dega
//undefined likhne par NaN
//true likhne par 1 aaya

let boo=1;
let r=Boolean(boo);
console.log(r);
//0-false 1-true
//"" false

let strin=33
let str=String(strin)
console.log(typeof str);