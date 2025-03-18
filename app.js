//Programa en el cuál un usuario ingresa un nombre a la vez en el campo "Escribe un nombre",
//los nombres se irán presentando debajo del campo "Escribe un nombre" hasta que
//el usuario de "click" en el botón "Sortear amigo" el cual llamará a una función para
//seleccionar de manera aleatoria un nombre de la lista y se mostrará en la pantalla


//Se define la variable "amigos" de tipo array para amigos la cuál contendra
//la lista de amigos a sortear.

let amigos = [];


//Al hacer "click" en el botón añandir se llama a la función "agregarAmigo"
//la cuál agregará el nombre del amigo al arreglo "amigos" definido previamente.
//Cada vez que se agrega un nombre al arreglo, estos se irán presentando
//en la pantalla debajo del campo "Escribe u nombre" y al mismo tiempo se limpia
//el campo "Escribe un nombre".
//En caso de no agregar un nombre, el programa índica con un alert que 
//el campo no puede estar vacío, solicitando que se ingrese un nombre. 

function agregarAmigo (){
    //Varibale sera un arreglo
    let limpiarResultado = document.getElementById('resultado');
    limpiarResultado.innerHTML = "";
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo == '') {
        alert('Por favor inserte un nombre, no puede dejar el campo vacío');  
   } else {
        amigos.push(nombreAmigo); 
        limpiarCampoNombre();
        actualizarListaAmigos(); 
   }
}

//La función "actualizarListaAmigos" es llamada de la función "agregarAmigo"
//Es la responsable de ir agregando de forma iterada los nombres que va ingresando
//el usuario. Limpia el último desplegado de la pantalla para presentar el último
//nombre ingresado actualizando el arrego amigos y presentandolo en el el id "listaAmigos".

function actualizarListaAmigos () {
        let list = document.getElementById('listaAmigos');  
        list.innerHTML ="";  
        for (i = 0; i < amigos.length; ++i) {          
            let li = document.createElement('li');
            li.innerText = amigos[i];
            list.append(li);
        }
}
//Función que permite limpiar el último valor de nombre al hacer click en el botón "Añadir".

function limpiarCampoNombre(){
    document.querySelector('#amigo').value = '';
 }

 //La función "sortearAmigo" permite seleccionar del arreglo "amigos",
 //un nombre de forma aleatoria y presentarlo en patanlla imprimiéndolo en
 //el id "resultado". Un vez hecho esto, se vacía el arreglo "amigos" para volver
 //a iniciar una selección.
 
 function sortearAmigo(){
    if (amigos.length === 0) {
        let limpiarResultado = document.getElementById('resultado');
        limpiarResultado.innerHTML = "";
        alert('Lista Vacía, por favor ingrese los nombres');
    } else {
       let borrarLista = document.getElementById('listaAmigos');
       borrarLista.innerHTML = "";
       let amigoSorteado = amigos[Math.floor(Math.random()*amigos.length)];
       let imprimeAmigoSorteado = document.getElementById('resultado');  
       imprimeAmigoSorteado.innerHTML = `El amigo secreto sorteado es ${amigoSorteado}`;
       amigos.length = 0;     
    }
}