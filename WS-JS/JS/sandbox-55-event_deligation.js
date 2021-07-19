// My simple solution to this problem
const ul = document.querySelector("ul");
const button = document.querySelector("button");

button.addEventListener("click", e =>{
    console.log("Button Clicked - Item Added");
    const li = document.createElement("li");
    li.textContent = "New Content";
    ul.prepend(li);
});

ul.addEventListener("click" , e => {
    console.log(e);
    if(e.target.tagName === "LI") {
        e.target.remove();
    } else
        console.log("Not an item on list");
});



