// higher order functions

// function first() {
//     console.log("Higher Order Functions")
// }
// function higherorder(horder) {
//     // console.log(horder);
//     first();
// }
// higherorder(first);

// call back functions
// executes later

// function sample(){
//     console.log("this is call back function");
    
// }
// function second(){
//     sample();
// }
// second(sample);

// function sample(name){
//     console.log("hello",name);
    
// }
// function second(){
//     sample("saranya");
// }
// second(sample);


// function callback(res){
//         console.log(res);    
// }
// function call(callback){
//     let res=10+25;
//     callback(res);
// }
// call(callback);

// array higher order

let arr=[1,2,3,4,5];
let double=arr.map(num=>num*2);
// arrow fn()
console.log(double);

