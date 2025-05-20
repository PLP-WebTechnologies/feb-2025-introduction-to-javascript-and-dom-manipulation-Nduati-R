function changeText() {
  const title = document.getElementById("main-title");
  title.textContent = "DOM Manipulation is Awesome! 🚀";
}

function changeStyle() {
  const description = document.getElementById("description");
  description.style.color = "green";
  description.style.fontWeight = "bold";
  description.style.backgroundColor = "#e0ffe0";
}

function toggleBox() {
  const container = document.getElementById("container");
  const existingBox = document.querySelector(".box");

  if (existingBox) {
    container.removeChild(existingBox);
  } else {
    const box = document.createElement("div");
    box.className = "box";
    container.appendChild(box);
  }
}
