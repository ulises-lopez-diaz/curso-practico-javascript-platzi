console.group("Cuadrados")
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}

//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

function areaCuadrado(lado){
    return lado * lado;
}
//console.log("El area del cuadrado es: " + areaCuadrado + " cm^2")
console.groupEnd();

// Codigo del triangulo
console.group("Triangulos")
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log(
//     "Los lados del triangulo miden: " 
//     + ladoTriangulo1 + " cm, " 
//     + ladoTriangulo2 + " cm, " 
//     + baseTriangulo + " cm"
// );
// console.log("La altura del triangulo es de: " + alturaTriangulo + " cm");
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}



// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + " cm");

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2; 
// console.log("El area del triangulo es: " + areaTriangulo + " cm^2")
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
console.groupEnd();

//Codigo de circulo
console.group("Circulos");

// Radio
// const radioCirculo = 4;
// console.log(
//     "El radio del circulo es: " 
//     + radioCirculo + " cm" 
    
// );

// Diametro
function diametroCirculo(radio){
    return radio * 2;
}
// const diametroCirculo = radioCirculo * 2;
// console.log(
//     "El diametro del circulo es: " 
//     + diametroCirculo + " cm" 
    
// );
// PI
const PI = Math.PI;
// console.log(
//     "PI es: " 
//     + PI  
// );

// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// const perimetroCirculo = diametroCirculo * PI;
// console.log(
//     "El perimetro del circulo es: " 
//     + perimetroCirculo + " cm" 
    
// );
// Area
function areaCirculo(radio){
    return (radio * radio) * PI;
}
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log(
//     "El area del circulo es: " 
//     + areaCirculo + " cm^2" 
    
// );
console.groupEnd();

// Aqui interactuamos con el html

function calcularPerimetroCuadrado(){
 const input = document.getElementById("InputCuadrado");
 const value = input.value;
 
 const perimetro = perimetroCuadrado(value);
 alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}