// function myFunction() {
//   console.log("hello")
// }
// myFunction()

// let text2="     Hello World!      "
// let text3 = text2.trim()
// console.log(text2.length)
// console.log(text3.length)

// function myFunction() {
//   console.log("hello")
// }
// myFunction()

// function sum(s1,s2){
//   console.log(s1+s2);
// }

// sum(20, 30);

// function multi(m1,m2){
//   console.log(m1*m2)
// }

// multi(10,20);
// multi(5,50)

// function div(d1,d2){
//   console.log(d1/d2)
// }

// div(100,10)

// function mod(p1,p2){
//   console.log(p1%p2)
// }

// mod(50,3)

// function sub(b1,b2){
//   console.log(b1-b2)
// }

// sub(30,50)

// types of functions
// 1.function statenent

// function greet(){
//   console.log("hello");
// }
// greet();

// // function expression

// const greets=function(){
//   console.log("good morning");
// }
// greets();

// function declaration
// function sum(a,b){
//   return a+b;
// }


// anonymous function

// function(){

//   console.log("hello!")
// }

// offenly used with function expression
// const greetss = function()
// {
//   console.log("hello!");
// }
// greetss();

// named function expression
// const greett = function sayhello()
//   {
//     console.log("Heellloooo!!!!");
//   }
// // sayhello(); error!!!!
// greett();

// functional programming

// higher order functions

// function a(){
//     console.log("hai")
//     }
//     function higherorder(sample){
//       console.log(sample);
      
//     a()
//     }
//     higherorder(a)
    
//     function b(){
//       console.log("hiiiiii");
//     }
//     function horder(samp){
//       console.log(samp);
      
//     console.log("hello");
//     b()
//     }
//     horder(b)

//     function higherorder(){
//         return  function inner(){
//             console.log("this is inner function");
            
//         }
//     }
// let innerfn = higherorder()
// console.log(innerfn)
// innerfn()

// first class functions

function greet(){
    return function(){
        console.log("hello!");
    }
}
const sayhello = greet();
console.log(sayhello)
sayhello();