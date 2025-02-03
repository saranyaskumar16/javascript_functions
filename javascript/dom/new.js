// const button=document.getElementById("myButton");
// button.addEventListener("click",function(){
//     // alert("completed successfully!!!");
//     // document.getElementById("sam").textContent=" Button was Clicked"
//     // document.getElementById("sam").style.color="green"
//     document.getElementById("sam").body.style.backgroundcolur="yellow"
// });
// const button = document.getElementById('colorButton');
// button.addEventListener("click", function() {
//     document.body.style.backgroundColor = "yellow";
// });

// const button1 = document.getElementById("colorB");
// button1.addEventListener("click", function() {
//     document.body.style.backgroundColor = "";
// });

// let dom= document.getElementById("samp")
// dom.addEventListener("mouseover", function(){
//     dom.style.backgroundColor="red"
// });
// dom.addEventListener("mouseleave", function(){
//     dom.style.backgroundColor="yellow"
// });

const inpu=document.getElementById("inp");
const parag=document.getElementById("para")
const butn=document.getElementById("btn")
butn.addEventListener("click",function(){
    parag.textContent=inpu.value
})