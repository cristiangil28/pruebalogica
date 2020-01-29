function mostrarArray() {
    var myArray = [13, 2, 4, 35, 1];
    valorMayor(myArray);
    var imprimirArray = "[";
    for (let index = 0; index < myArray.length; index++) {
        imprimirArray += myArray[index] + ",";

    }

    document.getElementById('resultado').innerHTML = "Array: " + imprimirArray + "]";

    var myArray2 = [1, 2, 2, 4, 5, 6, 7, 8, 8, 8];
    var imprimirArray2 = "[";
    for (let index = 0; index < myArray2.length; index++) {
        imprimirArray2 += myArray2[index] + ",";

    }
    document.getElementById('resultado2').innerHTML = "Array: " + imprimirArray2 + "]";
}

function valorMayor(myArray) {
    var mayor = 0;
    for (let index = 0; index < myArray.length; index++) {

        if (myArray[index] > mayor) {
            mayor = myArray[index];
        }
    }
    document.getElementById('valorMayor').innerHTML = "El valor mayor del array es: " + mayor;
}

function getHistograma() {
    var myArray2 = [1, 2, 1, 3, 3, 1, 2, 1, 5, 1];
    var repetidos = [];

    myArray2.forEach(function (numero) {
        repetidos[numero] = (repetidos[numero] || 0) + 1;
    });
    console.log(repetidos);
}

function getOcurrencias() {
    var myArray = [1, 2, 2, 4, 5, 6, 7, 8, 8, 8];
    var repetidos = [];
    var numRepetido =0;
    myArray.forEach(function (numero) {
        repetidos[numero] = (repetidos[numero] || 0) + 1;
        
        if (myArray[numero] > numRepetido) {
            numRepetido = myArray[numero];
        }
    });
    document.getElementById('ocurrencias').innerHTML = "El valor que mas se repite es:"+numRepetido;
}
mostrarArray();

getHistograma();

getOcurrencias();