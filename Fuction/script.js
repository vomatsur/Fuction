const body = document.getElementsByTagName("body")[0];

function darkmode() {
  body.classList.add("dark");
  b.style.color = "white";
  c.style.color = "white";
}
function lightmode() {
  body.classList.remove("dark");
    b.style.color = "black";
    c.style.color = "black";
}


let b = document.querySelector("h1");
let c = document.querySelector("p");