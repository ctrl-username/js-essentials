const container = document.querySelector("#container");
const content = document.createElement("div");
//content.classList.add("content");
content.textContent = "This is the glorious Text-content!";
container.appendChild(content);
const content1 = document.createElement("p");
content1.textContent = "Hey i'm red";
container.appendChild(content1);
content1.style.color = "red";
const content2 = document.createElement("h3");
content2.textContent = "I'm a blue H3!";
content2.style.color = "blue";
container.appendChild(content2);
const blackDiv = document.createElement("div");
blackDiv.setAttribute("id", "black-div");
blackDiv.setAttribute(
  "style",
  "border: solid black ; width: ; height:500px; background-color:pink; text-align:center;",
);
container.appendChild(blackDiv);

const subContainer = document.querySelector("#black-div");
const childH1 = document.createElement("h1");
childH1.textContent = "I'm in a Div";
const childP = document.createElement("p");
childP.textContent = "Mee TOO!";
blackDiv.append(childH1);
blackDiv.append(childP);

const hackBtn = document.createElement("button");
hackBtn.textContent = "Time Travel";
hackBtn.setAttribute("id", "converge");
blackDiv.append(hackBtn);

hackBtn.onclick = () => alert("Wordline Convergence, Fate Defeated");
//code event listeneres are fun
//document object observation
blackDiv.addEventListener("click", () => alert("Are you lost ?"));
hackBtn.addEventListener("click", (e) =>
  console.log((e.target.style.background = "red")),
);
