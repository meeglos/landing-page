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
