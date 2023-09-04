
const botonHeader = document.querySelector("todos");

const listaPokemon = document.querySelector("#listaPokemon");
let URL ="https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 50; i++){
    fetch(URL + i)
        .then((response) => response.json())
        .then(data => mostrarPokemon(data))
}
function mostrarPokemon(data){

  let tipos = data.types.map((type)=> `<p class="${type.type.name} tipo">${type.type.name}</p>`);
  tipos = tipos.join('');
  
  
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `<div class="pokemon-image">
    <img src=${data.sprites.other["official-artwork"].front_default} alt=${data.name}>
  </div>
  <div class="pokemon-info">
    <div class="nombre-contenedor">
      <p class="pokemon-id">${data.id}</p>
      <hr class="separator">
      <h2 class="pokemon-nombre">${data.name}</h2>
    </div>
    <div class="pokemon-tipos">
      ${tipos}
    </div>
    <div class="pokemon-stats">
      <p class="stat">${data.height}m</p>
      <p class="stat" id="weight">${data.weight}kg</p>
    </div> 
  </div> 
  `;
  listaPokemon.append(div);
}
function refresh() {
  location.reload();
}

/*
botonHeader.forEach(boton => boton.addEventListener("click", (event) => {
  const botonId = event.currentTarget.id;
  listaPokemon.innerHTML ="";

  for (let i = 1; i <= 50; i++){
    fetch(URL + i)
        .then((response) => response.json())
        .then(data => 
          {
            const tipos = data.types.map(type => type.type.name);
            if(tipos.some(tipo => tipo.includes(botonId))){
              mostrarPokemon(data)
            }
          })
}
}))
/*function refresh() {
  mostrarPokemon (console.log(data));
}


      <div class="card">
        <div class="pokemon-image">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="Pikachu">
        </div>
        <div class="pokemon-info">
          <div class="nombre-contenedor">
            <p class="pokemon-id"> #025</p>
            <h2 class="pokemon-nombre">Pikachu</h2>
          </div>
          <div class="pokemon-tipos">
            <p class="electric-tipo">Electric</p>
            <p class="fighting-tipo">Fighting</p>
          </div>
          <div class="pokemon-stats">
            <p class="stat">4m</p>
            <p class="stat" id="weight">60kg</p>
          </div> 
        </div>
      </div>

*/