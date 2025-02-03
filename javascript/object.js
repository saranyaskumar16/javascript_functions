// const person={
//     name:"saranya",
//     age:"27",
//     place:"kochi"
// };
// // console.log(person);
// console.log(person.age);

// const person={
//     name:"saranya",
//     age:"27",
//     place:{
//         state:"kerala",
//         district:"Ernakulam",
//         pin:682001
//     },
//     hobbies:["cooking","reading","listening music","sleeping"]
// }
// // console.log(person.place.district);

// console.log(person.hobbies[2]);

// object.assign()
// 

// Object.create()

// let person={
//     name:"Alice",
//     age:25
// };
// let newperson= Object.create(person);
// console.log(newperson.name);
// console.log(newperson.age);

// object.key() && object.values()
// let obj={
//     a:1,
//     b:2
// }
// // for object length
// console.log(Object.keys(obj).length);
// console.log(Object.values(obj));

const person={
    name:"saranya",
    age:"27",
    place:"kochi"
};

for(let key in person){
    // console.log(key);
    
 console.log(key,":",person[key]);
 
}
