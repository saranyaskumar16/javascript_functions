//  map
// let arr=[1,2,3,4,5];

// let nrr=arr.map((num,indx,arr)=>{
//     console.log('value:',num);

//     console.log('index:',indx);
//     console.log('arr:',arr);
//     return num*2;   
// })
// console.log(nrr);

//  // filter
// let num=[1,2,3,4,5,6,7,8,10];
// let evennums=num.filter(num=>num%2===0);
// console.log(evennums);

// reduce
let numb=[1,2,3,4,5]
let sum=numb.reduce((accumulator,num)=>accumulator+num,0);
console.log(sum);

// for each

let numbers=[1,2,3,4,5,6];
numbers.forEach(num=>console.log(num/2));
console.log(numbers);
