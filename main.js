document.getElementById("calcularButton").addEventListener("click", function() {
    const numerosString = document.getElementById("numeros").value;
    if (numerosString.trim() === "") {
        alert("Por favor, ingrese al menos un número.");
        return;
    }
    if (numerosString.match(/[^0-9,]/)) {
        alert("Por favor, ingrese solo números separados por comas.");
        return;
    }
    const numeros = numerosString.split(",").map(numero => parseInt(numero.trim()));
    const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    const media = suma / numeros.length;

    numeros.sort((a, b) => a - b);
    const mitad = Math.floor(numeros.length / 2);
    const mediana = numeros.length % 2 === 0 ? (numeros[mitad - 1] + numeros[mitad]) / 2 : numeros[mitad];

    const conteo = {};
    numeros.forEach(numero => conteo[numero] = (conteo[numero] || 0) + 1);
    let moda = [];
    let maximaFrecuencia = 0;
    for (const numero in conteo) {
        const frecuencia = conteo[numero];
        if (frecuencia > maximaFrecuencia) {
            moda = [numero];
            maximaFrecuencia = frecuencia;
        } else if (frecuencia === maximaFrecuencia) {
            moda.push(numero);
        }
    }
    const resultado = `
        <div class="row">
            <div class="col-3" id="textoBonito">
                Media: ${media}
            </div>
            <div class="col-3" id="textoBonito">
                Mediana: ${mediana}
            </div>
            <div class="col-3" id="textoBonito">
                Moda: ${moda}
            </div>
        </div>`;
    document.getElementById("resultado").innerHTML = resultado;
});
