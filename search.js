

document.querySelector("#search").addEventListener("click", getPokemon);
document.getElementById('show_error').classList.remove('show')
document.getElementById('show_error').classList.add('hidden')
function lowerCaseName(string){
    return string.toLowerCase();
}
function  getPokemon(e) {
    const name = document.querySelector("#pokemonName").value;
    const pokemonName = lowerCaseName(name);
    var str = "undefined";

    
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(function(e){
        console.log(e.status)
        if (e.status != 200) {
            document.querySelector(".pokemonBox").innerHTML = `
            <div class="card">
                <div>
                <img src="who_is_that_p.png" />
                </div>
            </div>
            `;
        return
        }
    return e.json()
    })

    .then((data) => {
        listaPokemon.innerHTML = ""; 

        document.querySelector(".pokemonBox").innerHTML = `
        <div class="card">
            <div>
                <img src="${data.sprites.other["official-artwork"].front_default}" 
                alt="${data.name}"/>
            </div>
            <div class="pokemonInfo">
                <h1>${data.name}</h1>
                <hr class="separator">
                <p>Type: ${data.types[0].type.name}</p>
                <p>Order: ${data.order}</p>
                <p>Height: ${data.height}</p>
                <p>Weight: ${data.weight}</p>
                <p>Experience: ${data.base_experience}</p>
            </div>

        </div>`;
        
    })
    .catch((error) => {
        if (name === "" ){

            document.querySelector(".pokemonBox").innerHTML = `
            <div class="card">
                <div>
                <img src="who_is_that_p.png" />
                </div>
            </div>
            `;
            document.getElementById("show_error").classList.add("show")
            document.getElementById("show_error").classList.remove("hiden")
            return str;
            
        }
        console.log(error);

    });


    e.preventDefault();
}



