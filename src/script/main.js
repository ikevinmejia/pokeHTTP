import createContent from "./modules/create-content.js";
import getData from "./modules/get-data.js";

const url = 'https://pokeapi.co/api/v2/pokemon/pikachu';


const root = document.querySelector('.root');

const data = await getData(url);

const nombre = data.name
const imagen = data.sprites.other.home.front_default;

createContent(root, imagen, nombre)


