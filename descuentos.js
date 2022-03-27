//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

// Precio - (Precio - descuento/100 )
// const porcentajePrecioConDescuento = 100 - descuento;
// const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// })

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
    const inputTipoDescuento = document.getElementById("InputTipoDescuento");
    let descuento = 0;
    switch(inputTipoDescuento.value){
        case "cupon20":
            descuento = 20;
            break;
        case "cupon30":
            descuento = 30;
            break;
        case "cupon40":
            descuento = 40;
            break;
        default:
            alert("Ese cupon no existe")
    }
    //const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    const resultP = document.getElementById("ResultPrice");
    resultP.innerText = `El valor del producto es ${precioConDescuento}`;
}