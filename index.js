// // Functions - In order to execute a particular lines of code repetitively, we can allocate them into a function, which can then be called again and again as required. This prevents us writing a piece of code mulitple times. 

// //function definition from lines 6-8
// //we need to have n no of parameters for n number of arguments passed while calling the functions, so parameters catch the arguments in the sequence they are passed


// function multiply(parameter1, parameter2){
//     console.log("Inside multiply function");
//     //the function body can have more than one line of code.
// }

// //function calling on line 11
// multiply(arg1,arg2);//name of a function followed by open and close parenthesis.
// //while we call a function we pass arguments inside the parenthesis, if we have to pass any values otherwise not necessary to pass arguments. The arguments passed can be one or many separated by commas.

// // Arrow Function
// const addition = (parameter1,parameter2)  =>  {
//     console.log("add");
// }
// addition(arg1,arg2)

// //Expression  Function
// const subtraction = function(parameter1,parameter2){
//     console.log("sub");
// } 
// subtraction(arg1,arg2)

// function sayHi(){
//     console.log("Hii! My name is Kuldeep")
//     let a = 2;
//     let b = 4;
//     let result = a * b;
//     console.log(result);
// }
// sayHi();

// function add(num1,num2){
//     let result = num1 + num2;
//     console.log(result);
// }
// add(5,5);

// function div(num1,num2){
//     let result = num1/num2;
//     return result;
// }
// console.log(div(6,3));


// // The Lexical Environmewnt and Scope Chain:
// let i = 5;
// function one(){
//     console.log(i);
//     two();

//     function two(){
//         console.log(i);
//     }
// }
// one();

// // checking parents:

// function one(){
//     console.log(i);
//     two();

//     function two(){
//         let i=5;
//     console.log(i);
// }
// }
// one();

// Block Scope and Boxshadowing:
// let a = 2;
// let b = 4;
// let c = 6;
// console.log(a);
// console.log(b);
// console.log(c);

// {
//     let a = 2;
//     let b = 4;
//     let c = 6;
//     console.log(a);
//     console.log(b);
//     console.log(c);
     
// }

// console.log(a);
// console.log(b);
// console.log(c);

// Eg:
// let m = 4;
// console.log(m);//4
// {
//     let m= 5
//     console.log(m);//5

// }
// console.log(m);//4

// const n = 4;
// console.log(n);//4
// {
//     const n= 5
//     console.log(n);//5

// }
// console.log(n);//4

