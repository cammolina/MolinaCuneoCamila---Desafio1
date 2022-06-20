let entrada = prompt ("Ingresar la palabra clave")

while (entrada != "ESC") {
    switch (entrada) {
        case "PANCHI":
            alert ("Bienvenida PANCHI")
            break
        case "RATON":
            alert ("Bienvenido RATON")
            break
        default:
            alert ("Ingreso rechazado")
            break
}
entrada = prompt("Ingresar la palabra clave")
}
