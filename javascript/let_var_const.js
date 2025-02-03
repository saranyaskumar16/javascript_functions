//"var"-------> reassigning
var num
num=10 
num=6
console.log(num); 
// redeclaration is allowed
var h=10
var h=20
console.log(h);

// var a = 10
// function f() {
//     var b = 20
//     console.log(a, b)
// }
// f();

//"let"----->strict keyword
let num2
num2=25
num2=55
console.log(num2);

let gg=29
// let gg=96 ------>re declaraton not allowed
console.log(gg);


// let ac = 10;
// function f1() {
//     let bd = 9
//     console.log(bd);
//     console.log(ac);
// }
// f1();

// "const"-------->
// more strict keyword, reassigning not allowed
// must be initialize at the declaration tym
const ab=3
// const ab=5 ------>  reassigning and redeclaration not allowed
console.log(ab);

// const ff=15
// function f2(){
//     const nn=65
//     console.log(ff+nn);   
// }
// f2()
