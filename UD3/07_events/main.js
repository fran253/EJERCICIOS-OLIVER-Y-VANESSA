window.onload = function(e) {
    console.log('documento cargado');

    // Selecciona todos los enlaces y les añade el evento de clic
    document.getElementById("enlace_1").onclick = function() { cambioSeccion(1); };
    document.getElementById("enlace_2").onclick = function() { cambioSeccion(2); };
    document.getElementById("enlace_3").onclick = function() { cambioSeccion(3); };
};

// Ocultar y mostrar / cambiar de nombre
function cambioSeccion(num) {
    let contenido = document.getElementById("contenidos_" + num);
    let enlace = document.getElementById("enlace_" + num);

    if (contenido.style.display === "none") {
        contenido.style.display = "block";
        enlace.innerHTML = "Ocultar contenidos";
    } else {
        contenido.style.display = "none";
        enlace.innerHTML = "Mostrar contenidos";
    }
}
