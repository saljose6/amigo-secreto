// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array donde se almacenarán los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Capturar el nombre ingresado
    const nombreInput = document.getElementById('amigo');
    const nombre = nombreInput.value.trim(); // Eliminar espacios extra

    // Validación para evitar nombres vacíos
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nombre al arreglo de amigos
    amigos.push(nombre);

    // Limpiar el campo de texto
    nombreInput.value = "";

    // Actualizar la lista visible de amigos
    actualizarLista();
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    // Obtener el contenedor de la lista de amigos
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpiar la lista actual
    listaAmigos.innerHTML = "";

    // Recorrer el array de amigos y agregar cada uno a la lista
    amigos.forEach(function(amigo) {
        const li = document.createElement('li');
        li.textContent = amigo; // Establecer el texto de cada item
        listaAmigos.appendChild(li); // Agregar el item a la lista
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Verificar si hay amigos en la lista
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre del amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el nombre sorteado en la interfaz
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}