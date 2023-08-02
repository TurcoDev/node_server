import { createServer } from "node:http";
import hello from "./js/hello.js";
// import rickAndMortyApi from "./js/rickAndMorty.js";
import { showCharacters } from "./js/showCharaters.js";

const server = createServer((req, res) => {
  console.log("respuesta del servidor...");
  fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    let names = '** ';
    data.results.forEach(element => {
      names += element.name + '\n** ';
    });
    console.log(names);
    res.end(names);
  });
  // res.end(hello());
});

const host = "localhost";
const port = 3000;

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});