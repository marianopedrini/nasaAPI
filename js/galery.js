const mainDiv = document.getElementById("root-galery");
const form = document.getElementById("form");

const showData = (event) => {
  event.preventDefault();

  form.style.display = "none";

  fetch(
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=GKib1bKLpZSLfpn1EnKDrKX328Xzs3armTjf59El"
  )
    .then((response) => response.json())
    .then((data) => renderData(data))
    .catch((err) => console.log(err));
};

const renderData = (data) => {
  console.log(data);

  data.photos.forEach((photo) => {
    // Creamos las etiquetas HTML
    const div = document.createElement("div");
    const img = document.createElement("img");
    const date = document.createElement("p");
    const robot = document.createElement("p");

    // Asignamos contenido y atributos a las etiquetas
    img.setAttribute("src", photo.img_src);
    date.textContent = photo.earth_date;
    robot.innerHTML = "Tooked by: " + "<span>" + photo.rover.name + "</span>";

    // Agregamos dichos elemtons al div de cada foto
    div.appendChild(img);
    div.appendChild(date);
    div.appendChild(robot);

    // Agregamos el div al contenedor principal
    mainDiv.appendChild(div);
  });
};
