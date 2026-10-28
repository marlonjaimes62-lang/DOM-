export const validar = (elemento) => {
    const elementos = elemento.querySelectorAll("input[required]");
    const obj = {}
    const miArray = [...elementos];
    //Validar si algun campo no tiene contenido
    let respuesta = miArray.filter((e) => {
        
        obj[e.name] = {
            "typo": "Texto",
            "EsValido": false,
            "error": "Solo podemos ingresar números"
        }

        if (e.attributes.type.value == "text") {
            soloTexto(e)
        }
        if (e.attributes.type.value == "number") {
            soloNumeros(e)
        }

        if (e.value !== "") {
            // quitar la clase error
            e.classList.remove("error")
            return true
        } else {
            // Agrego la clase para mostrar el error
            e.classList.add("error")
            return false
        }
    });

    return obj;
}

const soloNumeros = (e) => /^-?\d+$/.test(e.value);

const soloTexto = (e) => /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(e.value);