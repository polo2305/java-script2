// Simulador: Validador de Stock y Compra de Producto
const PRODUCTO_STOCK = 5; // Stock disponible del producto
const PRECIO_UNITARIO = 1500;
let continuarComprando = true;

console.log("=== BIENVENIDO A LA TIENDA VIRTUAL ===");
console.log(`Producto disponible: Zapatillas | Stock: ${PRODUCTO_STOCK} unidades | Precio: $${PRECIO_UNITARIO}`);

// BUCLE: Permite repetir el proceso de compra hasta que se efectúe o el usuario decida salir
while (continuarComprando) {
    let entrada = prompt("¿Cuántas unidades deseas comprar? (Escribe 'ESC' para salir)");

    // CONDICIONAL para manejar la salida del bucle si el usuario cancela o escribe ESC
    if (entrada === null || entrada.toUpperCase() === "ESC") {
        continuarComprando = false;
        console.log("👋 Operación cancelada. ¡Gracias por visitar la tienda!");
    } else {
        let cantidadDeseada = parseInt(entrada);

        // CONDICIONALES para validar los datos ingresados
        if (isNaN(cantidadDeseada) || cantidadDeseada <= 0) {
            console.log("⚠️ Error: Por favor, ingresa un número válido mayor a 0.");
        } else if (cantidadDeseada <= PRODUCTO_STOCK) {
            let total = cantidadDeseada * PRECIO_UNITARIO;
            console.log(`✅ ¡Compra exitosa! Compraste ${cantidadDeseada} unidad(es).`);
            console.log(`💰 El precio total a pagar es: $${total}`);
            continuarComprando = false; // Finaliza el bucle tras la compra exitosa
        } else {
            console.log(`❌ Stock insuficiente. Solo quedan ${PRODUCTO_STOCK} unidades disponibles.`);
        }
    }
}