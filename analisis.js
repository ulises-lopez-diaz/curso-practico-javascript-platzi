// Helpers
function esPar(numerito){
    return (numerito % 2 === 0);
}


function calcularMediaAritmetica(lista){
    // let sumaLista = 0;
    // for (let i=0; i<lista.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // }
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// Calculadora de medianas
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(mitad)){
        const personitaMitad1 = lista[mitad-1];
        const personitaMitad2 = lista[mitad];
        const media = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return media;

    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}


// Media General
const salariosCol = colombia.map(
    function(personita){
        return personita.salary;
    }
);

// Calculando la mediana general
const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);




const medianaGeneralCol = medianaSalarios(salariosColSorted)

// Mediana del top 10%
const spliceStart = (salariosColSorted.length * (100 - 10)) / 100;
const spliceCount = salariosColSorted.length - spliceStart;
const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);


const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});