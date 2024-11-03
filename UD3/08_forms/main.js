window.addEventListener("load", function() {
    // Referencias a los elementos del formulario
    const botonEnviar = document.getElementById("submit");
    const checkCondiciones = document.getElementById("condiciones");
    const checkPrivacidad = document.getElementById("privacidad");
    const radioSi = document.getElementById("pregunta_si");
    const radioNo = document.getElementById("pregunta_no");
    const selectOpciones = document.getElementById("opciones");
    const txtNombre = document.forms["main_form"]["name"];
    const txtApellidos = document.forms["main_form"]["surname"];
    const txtDescripcion = document.forms["main_form"]["description"];

    btnEnviar.disabled = true;
    cmbOpciones.disabled = true;

    // FUNCIONES
    function actualizarEstadoBoton() {
        btnEnviar.disabled = !(chkCondiciones.checked && chkPrivacidad.checked);
    }
    // El combo de opciones sólo estará habilitado si se pulsa “si” en el primer check
    function actualizarEstadoCombo() {
        cmbOpciones.disabled = !rdbSi.checked;
    }

    
    function comprobarFormulario(event) {
        const nombre = txtNombre.value.trim();
        const apellidos = txtApellidos.value.trim();

        // Implementar algún mecanismo para prevenir el doble submit
        if (nombre === "" || apellidos === "") {
            alert("Por favor, rellena los campos de Nombre y Apellidos.");
            event.preventDefault();
            return;
        }

        // Implementar algún mecanismo para prevenir el doble submit
        btnEnviar.disabled = true;
    }

    // El tamaño máximo de la descripción es de 80 carácteres
    txtDescripcion.addEventListener("input", function() {
        if (txtDescripcion.value.length > 80) {
            txtDescripcion.value = txtDescripcion.value.slice(0, 80);
            alert("La descripción no puede superar los 80 caracteres.");
        }
    });

    // Asignar eventos
    chkCondiciones.addEventListener("change", actualizarEstadoBoton);
    chkPrivacidad.addEventListener("change", actualizarEstadoBoton);
    rdbSi.addEventListener("change", actualizarEstadoCombo);
    rdbNo.addEventListener("change", actualizarEstadoCombo);


    btnEnviar.addEventListener("click", function(event) {
        comprobarFormulario(event);
    });
});
