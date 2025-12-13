const container = document.querySelector("#container");
const content = document.createElement("div");
//content.classList.add("content");
content.textContent = "This is the glorious Text-content!";
container.appendChild(content);
const content1 = document.createElement("p");
content1.textContent = "Hey i'm red";
container.appendChild(content1);
content1.style.color = "red";
