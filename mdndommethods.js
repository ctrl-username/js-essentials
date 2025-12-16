const link = document.querySelector("a");

link.textContent = "It's a lonely ride, but we'll get there";
link.href = "https://raviheima.short.gy";
const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = " -Believe you can and you're halfway there";
sect.appendChild(para);

const text = document.createTextNode(
  " -The beautiful thing about learning is that nobody can take it away from you.",
);
const linkPara = document.querySelector("p");

linkPara.appendChild(text);
// sect.removeChild(linkPara);
linkPara.remove();
//
//
//why
//
//why are you here
// i don't see any reason
