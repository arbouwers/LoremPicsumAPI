baseURL = "https://picsum.photos/";
let url;

const form = document.getElementById("form");
const section = document.querySelector("section");

// EVENTS

form.addEventListener("submit", function(e) {
  e.preventDefault(e);

  let width = document.getElementById("width").value;
  let height = document.getElementById("height").value;

  url = baseURL + `${width}` + "/" + `${height}`;

  let image = document.getElementById("img");
  image.src = url;
})

