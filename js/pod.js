window.addEventListener("load", () => {
  const containerPod = document.getElementById("root-pod");

  const showData = (event) => {
    // event.preventDefault();

    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=GKib1bKLpZSLfpn1EnKDrKX328Xzs3armTjf59El"
    )
      .then((response) => response.json())
      .then((data) => renderData(data))
      .catch((err) => console.log(err));
  };

  const renderData = (data) => {
    console.log(data);

    const leftContainer = document.createElement("div");
    const fileContainer = document.createElement("div");
    const descContainer = document.createElement("div");
    let file;

    if (data.media_type == "video") {
      file = document.createElement("iframe");
      file.setAttribute("title", "vimeo-player");
      file.setAttribute("src", data.url);
      file.setAttribute("frameborder", "0");
      file.setAttribute("width", "640");
      file.setAttribute("height", "360");
    } else {
      file = document.createElement("img");
      file.setAttribute("src", data.url);
    }

    const author = document.createElement("h4");
    const title = document.createElement("h3");
    const desc = document.createElement("p");
    const date = document.createElement("p");

    title.textContent = data.title;
    desc.textContent = data.explanation;
    author.textContent = data.copyright;
    date.textContent = data.date;

    fileContainer.classList.add("file-container");
    descContainer.classList.add("desc-container");
    leftContainer.classList.add("left-container");
    date.style.textAlign = "end";

    fileContainer.appendChild(file);
    if (data.copyright) {
      fileContainer.appendChild(author);
    }
    descContainer.appendChild(title);
    descContainer.appendChild(desc);
    descContainer.appendChild(date);
    leftContainer.appendChild(fileContainer);

    containerPod.appendChild(leftContainer);
    containerPod.appendChild(descContainer);
  };

  showData();
});
