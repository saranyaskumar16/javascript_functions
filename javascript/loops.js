// loops----->"FOR loop"

// let x
// for(x=2; x<=4; x++)
// {
//     console.log("value of x:" + x);
    
// }

// descending order
// for (let i = 25; i >= 20; i--)
//  {
//    console.log(i);
     
//   }

// for (let i = 1; i <= 10; i++)
//     {
//       if(i%2!==0){
//         console.log("odd:",i);
        
//       }
//       else{
//         console.log("even:", i);
        
        
//       }
        
//      }

//      for (let i = 0; i < 5; i++) {
//         console.log("Hello World!");
//     }

    
// factorial

// let a=1
// let n=9
// for(let i=1; i<=n; i++){
//     a=a*i;
// }
// console.log("the factorial of given number is:", a);

// fibonacci series
// const n=10
// let n1=0, n2=1, sum
// console.log("fibonacci numbers are:");

// for(let i=1; i<=n; i++){
//     console.log(n1);
//     sum=n1+n2;
//     n1=n2;
//     n2=sum;
    
// }
const n=10
for(let i=1; i<=n; i++){
    if(i===3){
        break;
        // continue;
    }
    console.log(i);
    
}

// let arr=[10,23,32,47,58,6]
// for(let i=0; i<arr.length; i++){
//     if(arr[i]%2===0){
//        console.log( arr[i]+ ":is even number");
//     }
    
// }

// let y=5
// for (let i = 1; i <= 10; i++)
//  {
//     console.log(y * i); 
//   }

//   WHILE loop--------->
// let count = 1;
// while (count <= 5) {
//   console.log(count);
//   count++;
// }

// DO WHILE----->
// the do-while loop guarantees that the block of code inside the loop will be executed at least once, regardless of whether the condition is initially true or false .
// let countt = 1;
// do {
//   console.log(countt);
//   countt++;
// } while (countt <= 5);