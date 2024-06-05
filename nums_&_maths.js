/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/               

// let num1= new Number(56);
// let num2=777;
// num3 = 897;
// console.log(typeof num1.toString());//this help to convert num to string and we access all string methods also
// console.log(num1.toString());


const balance = new Number(1100);
let num= 3.1478;

// console.log(balance.toFixed(2));//!! output 100.00 !! no of decimal after point 

// console.log(balance.toExponential(1));//O/P is 1.1e+3 exponential 
// console.log(balance.toString().length);//o/p is 4
// console.log(balance.toString());//o/p is 1100 in string type

// console.log(num.toPrecision(4));//O/p 3.148 means how much you want to add want precise number afer decimal point 
let num2= new Number (4345465)
// console.log(num2.toLocaleString('en-IN'));//to count for easy counting of same types of number and also easy to read able !! O/P !! 1,00,00,00

// console.log(Number.MAX_VALUE);// O/P is 1.79769 
// console.log(Number.MIN_VALUE);// O/P is 5e-324
// console.log(Number.MIN_SAFE_INTEGER);// O/P is -9007199254740991
// console.log(Number.MAX_SAFE_INTEGER);//output is 9007199254740991


/*+++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++++++*/ 

//!! maths operation is done only with number not with bigint 

let n1=new Number(-786.486)
let n2= Math.round(n1)
let n3= -5554644646465n

// let n4= new Math.abs("53554")
// console.log(n4);ex of bigint not work with math function
// console.log(Number(n2));

// console.log(Math.abs(Math.round(n1)));// o/p is 786
// console.log(Math.abs(Math.round(n1)));// o/p is 786.486

// console.log(Math.round(Math.random()*10)+1);//we  got single digit random numbers 1 ,5, 7 

let min=10;
let max=20;
console.log(Math.round(Math.random(n3)*10)+1*(max-min));//we got our desireable results 10 and 20 btw 11, 15 , 17 etc

