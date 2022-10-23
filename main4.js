
let contPokemon = '';
const cargarPokemon = async() => {
    for(let i=0; i<=5; i++)
             {
                
    let pokemon=Math.floor(Math.random()*499)+ 1;
	try {
       
		const respuesta = await fetch(` https://pokeapi.co/api/v2/pokemon/${pokemon}`);
		if(respuesta.status === 200){

            
            const datos = await respuesta.json();
             contPokemon += `
					<div class="poke">
						<img class="post" src="${(datos).sprites.front_default}">
						<h3 class="titulo">${(datos).name}</h3>
					</div>
				`;
			document.getElementById('contenedor').innerHTML = contPokemon;

		} else if(respuesta.status === 401){
			console.log('Pusiste la llave mal');
		} else if(respuesta.status === 404){
			console.log('La pelicula que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos que paso');
		}


	} catch(error){
		console.log(error);
	}
}

}

cargarPokemon();