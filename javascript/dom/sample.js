let heading=document.getElementById("txt");
heading.textContent="thank_you....."
heading.style.color="red"
heading.style.fontSize="40px"

let para=document.getElementById("txt1")
para.innerHTML="back to dom......."
para.style.fontSize="25px"
para.style.color="green"

document.querySelector("h3, h4").style.backgroundColor = "red";
document.querySelector("h2#example1").style.backgroundColor="yellow"


document.querySelector("p.example").style.color = "blue";

document.querySelector("h5").textContent="saranya";

var content = document.getElementById("myDiv").innerHTML;
console.log(content);  // Output: <p>This is some text.</p>

document.getElementById("myp").innerHTML = "<p>New content!</p>";

function changeContent() {
    document.getElementById("myParagraph").innerHTML = "Updated text!";
  }

  function addListItems() {
    document.getElementById("myList").innerHTML += "<li>Item 2</li><li>Item 3</li>";
  }
  


// let para=document.querySelector(".txt1");
// para.classList.add("highlight");
// para.classList.remove("txt1");