
//Inicio validacion de Formulario de contacto

function validarEnviar() {
    //validacion nombre
    if (document.fvalida.nombre.value.length  == 0) {
        alert("Tiene que escribir su nombre")
        document.fvalida.nombre.focus()
        return 0
    }

    //Validacion edad INT>18
    edad = document.fvalida.edad.value
    edad = validarEntero(edad)
    document.fvalida.edad.value = edad
    if (edad == "") {
        alert("Deben ser numeros enteros.")
        document.fvalida.edad.focus()
        return 0
    } else {
        if (edad < 18) {
            alert("Debe ser mayor de 18 años.")
            document.fvalida.edad.focus()
            return 0
        }
    }

    //validacion interés
    if (document.fvalida.interes.selectedIndex == 0) {
        alert("Debe seleccionar un motivo de su contacto.")
        document.fvalida.interes.focus()
        return 0
    }

    //Finalmente, si llegó hasta aqui, se envia el form.
    alert("Muchas gracias por enviar el formulario")
    document.fvalida.submit()
}

function validarEntero(valor) {
    //intento convertir a entero.
    //si era un entero no le afecta, si no lo era lo intenta convertir
    valor = parseInt(valor)

    //Compruebo si es un valor numérico
    if (isNaN(valor)) {
        //entonces (no es numero) devuelvo el valor cadena vacia
        return ""
    } else {
        //En caso contrario (Si era un número) devuelvo el valor
        return valor
    }
}
// Fin validacion Formulario de contacto

// Inicio widget dolar api

        //Url  api que Dolar
        const url_api = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales'
        //Función asíncrona
        async function obtenerVerde(){
            const response = await fetch(url_api)
            console.log(response)   

            
            //Transforma esto a json para poder trabajarlo:
            const data = await response.json()
            console.log(data)

            //Pdemos mostrar los datos:
            const monedaw1 = data[0].casa.nombre
            const compraw1 = data[0].casa.compra
            const ventaw1 = data[0].casa.venta
            console.log(monedaw1)
            console.log(compraw1)
            console.log(ventaw1)
            document.getElementById("monedaw1").innerHTML = monedaw1
            document.getElementById("compraw1").innerHTML = compraw1
            document.getElementById("ventaw1").innerHTML = ventaw1

            const monedaw2 = data[1].casa.nombre
            const compraw2 = data[1].casa.compra
            const ventaw2 = data[1].casa.venta
            console.log(monedaw2)
            console.log(compraw2)
            console.log(ventaw2)
            document.getElementById("monedaw2").innerHTML = monedaw2
            document.getElementById("compraw2").innerHTML = compraw2
            document.getElementById("ventaw2").innerHTML = ventaw2
        }

        obtenerVerde()

// Fin widget dolar api