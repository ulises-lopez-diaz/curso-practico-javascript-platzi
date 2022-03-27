// const lista1 = [
//     1,
//     2,
//     3,
//     1,
//     2,
//     3,
//     4,
//     2,
//     2,
//     1,
//     2,
// ];

// const lista1Count = {

// };

// lista1.map(
//     function(elemento){
//         if(lista1Count[elemento]){
//             lista1Count[elemento] += 1;
//         } else {
//             lista1Count[elemento] = 1;
//         }
//     }
// );

// let moda = 0;
// let indiceModa;
// for(const [key, value] of Object.entries(lista1Count)){
//     if(value > moda){
//         moda = value;
//         indiceModa = key;
//     }
// }

// console.log(indiceModa,moda);

// const lista1Array = Object.entries(lista1Count).sort(
//     function(valorAcumulado, nuevoValor){
//         return valorAcumulado[1] - nuevoValor[1];
//     }
// );

// const moda = lista1Array[lista1Array.length-1];

function calcularModa(lista){
    const lista1Count = {

    };

    lista.map(
        function(elemento){
            if(lista1Count[elemento]){
                lista1Count[elemento] += 1;
            } else {
                lista1Count[elemento] = 1;
            }
        }
    );

    const lista1Array = Object.entries(lista1Count).sort(
        function(valorAcumulado, nuevoValor){
            return valorAcumulado[1] - nuevoValor[1];
        }
    );
    
    const moda = lista1Array[lista1Array.length-1];
    
    return moda;
}