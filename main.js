const producto = [
    { nombre: "casio" , precio: 1500 },
    { nombre: "mistral" , precio: 2000},
    { nombre: "g-shock" , precio: 8500 },
    { nombre: "smart" , precio: 5500 },
    { nombre: "prune" , precio: 7900 },

];
let carrito = []

let seleccion = prompt("hola desea comprar algun producto, si o no") 

while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingrese si o no")
    seleccion = prompt("hola desea comprar algo si o no")
}

if(seleccion == "si"){
    alert("a continuacion nuestra lista de producto")
    let todoslosProductos = producto.map(
        (producto) => producto.nombre + " " + producto.precio + "$"
    );
    alert(todoslosProductos.join("-"))
}else if (seleccion  == "no"){
    alert("gracias por venir, hasta pronto!")
}

while(seleccion != "no"){
let producto = prompt("agrega un producto a tu carrito")
let precio = 0

if(producto == "casio" || producto == "mistral" || producto == "g-shock" ||
producto == "smart" || producto == "prune" ){
    switch(producto){
        case "casio":
        precio = 1500
        break;
        case "mistral":
        precio = 2000
        break;
        case "g-shock":
        precio = 8500
        break;
        case "smart":
        precio = 5500
        break;
        case "prune":
        precio = 7900
        break;
        default:
        break;
    }
    let unidades = parseInt(prompt("cuantas unidades quiere llevar"))

    carrito.push({producto, unidades, precio})
    console.log (carrito)
} else{
    alert("no tenemos ese producto")
}

seleccion = prompt("desea seguir comprando?")

while(seleccion === "no" ){
    alert("gracias por la compra! hasta pronto")
    carrito.forEach((carritoFinal) => {
        console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
        total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
    })
    break;
}
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagar de su compre es: ${total}`)