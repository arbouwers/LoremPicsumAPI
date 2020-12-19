const baseURL = "https://picsum.photos";

const viewBtn = document.querySelector(".view-btn");
const wrapper = document.querySelector(".img-wrapper");

let pageNumber = 0;

viewBtn.addEventListener("click", fetchImages);

function fetchImages(e) {
  e.preventDefault();
  let url = baseURL + "/v2/list?page=" + pageNumber + "&limit=30";

  fetch(url)
    .then(function(result) {
      return result.json();
    })
    .then(function(json) {
      console.log(json)
      displayResults(json)
    })
}

function displayResults(json) {
  let images = json;

  if(images.length === 0) {
    console.log("No results");
  } else {
    for (let i = 0; i < images.length; i++) {
      let img = document.createElement("img");
      let current = images.reverse();

      console.log("Current: ", current);

      img.src = json[i].download_url;
      img.width = 400;
      console.log(img.src)

      wrapper.appendChild(img);
    }
  }
 
}
