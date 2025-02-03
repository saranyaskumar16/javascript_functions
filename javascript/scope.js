// const a = 20;
// {
//   const a = 30;
//   console.log("Inside Block 1, a = ",a);
//   {
//     const a = 40;
//     console.log("Inside Block 2, a = ",a);
//   }
// }
// console.log("Outside Block, a = ",a);

const a = 20;
{
  const a = 30;
  console.log("Inside Block 1, a = ",a);
  {
    console.log("Inside Block 2, a = ",a);
  }
}
console.log("Outside Block, a = ",a);