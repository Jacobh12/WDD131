const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const picture = document.createElement("img");
picture.setAttribute = ("alt", "Random Image") 
picture.src = "https://picsum.photos/200";
document.body.append(picture);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);


const newSection = document.createElement("section");
newParagraph.innerHTML = "<h2>DOM Basics</h2><p>This was added through Javascript</p>";
document.body.appendChild(newSection);

