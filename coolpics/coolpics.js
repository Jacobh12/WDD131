const menuButton = document.querySelector("#menu-Btn");
const menu = document.querySelector("#nav-links"); // use id from HTML

menuButton.addEventListener("click", () => {
  menu.classList.toggle("hide");
});

function handleResize() {
  if (window.innerWidth > 700) {
    // large screen: force menu visible
    menu.classList.remove("hide");
  } else {
    // small screen: force menu hidden initially
    menu.classList.add("hide");
  }
}

// watch for resize events
window.addEventListener("resize", handleResize);

// call it once when page loads
handleResize();

function viewerTemplate(pic, alt) {
  return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${pic}" alt="${alt}">
    </div>`;
}







function viewHandler(event) {
  const clicked = event.target;
  if (clicked.tagName !== "IMG") return;

  const src = clicked.getAttribute("src");      // e.g. "norris-sm.jpeg"
  const fullSrc = src.replace("-sm", "-full");  // → "norris-full.jpeg"

  const html = viewerTemplate(fullSrc, clicked.alt || "");
  document.body.insertAdjacentHTML("afterbegin", html);

  document.querySelector(".close-viewer")
    .addEventListener("click", closeViewer);
}



function closeViewer() {
  const viewer = document.querySelector(".viewer");
  if (viewer) viewer.remove();
}

document.querySelector(".gallery").addEventListener("click", viewHandler);