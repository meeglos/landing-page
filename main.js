let tipo = [
  "Bicho",
  "Dragón",
  "Eléctrico",
  "Hada",
  "Lucha",
  "Fuego",
  "Volador",
  "Fantasma",
  "Planta",
  "Tierra",
  "Hielo",
  "Normal",
  "Veneno",
  "Psíquico",
  "Roca",
  "Acero",
  "Agua",
];

tipo.forEach((e) =>
  document
    .getElementById("especies")
    .insertAdjacentHTML(
      "beforeend",
      "<p class='ml-2 rounded-lg text-white bg-red-500 px-2 my-1'>" + e + "</p>"
    )
);

const BASE_URL = "https://pokeapi.co/api/v2/";
const $image = document.querySelector("#image");
const $name = document.querySelector("#name");

function renderError(status) {
  $name.textContent = `${status} Pokemon no encontrado`;
}
function renderPokemon(pokemon) {
  $name.textContent = pokemon.name;
  $image.setAttribute("src", pokemon.sprites.front_default);
}

function ajax({
  url,
  method = "GET",
  async = true,
  done = () => {},
  error = () => {},
  responseType = "json",
}) {
  function status(readyState) {
    switch (readyState) {
      case 0:
        return "uninitialed";
      case 1:
        return "loading";
      case 2:
        return "loaded";
      case 3:
        return "interactive";
      case 4:
        return "completed";
    }
  }
  const request = new XMLHttpRequest();
  request.responseType = responseType;
  console.log(status(request.readyState), request.readyState);

  request.onreadystatechange = () => {
    console.log(status(request.readyState), request.readyState);
    if (request.readyState === 4) {
      if (request.status === 200) {
        done(request.response);
      } else {
        error(request.status);
      }
    }
  };
  request.open(method, url, async);
  request.send(null);
  return request.response;
}

ajax({
  url: `${BASE_URL}pokemon/745`,
  async: true,
  done: renderPokemon,
  error: renderError,
});
