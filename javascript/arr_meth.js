const names=["saranya","Atharv","kashi","suja","sarath"]
console.log(names.length);

let str=names.toString();
console.log(names);

let str1=names.join("**")
console.log(str1);

let strr=names.pop();
console.log(strr);

let str2=names.push("sree");
console.log(str2);
console.log(names);


let str3=names.shift();
console.log(str3);

let str4=names.unshift("abhi")
console.log(str4);
console.log(names);

let str5=delete names[2];
console.log(str5);
console.log(names);

const namee=["manju","meenu","abhishek"]
let str6=names.concat(namee)
console.log(str6);

let str7=names.slice(1,3)
console.log(str7);

let str8=names.splice(1,2,"chinnu")
console.log(str8);
console.log(names);
