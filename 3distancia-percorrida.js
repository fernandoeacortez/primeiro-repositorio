
function calcularDistancia(nomePiloto, distancia, tempo) {
   
    const velocidadeMedia = distancia / tempo;

 
    console.log(`PILOTO: ${nomePiloto}`);
    console.log(`DISTANCIA PERCORRIDA: ${distancia} KM`);
    console.log(`TEMPO GASTO: ${tempo} HORAS`);
    console.log(`VELOCIDADE MÉDIA: ${velocidadeMedia.toFixed(2)} KM/H`);

    return distancia;
}


const nomePiloto = "CARLOS SILVA";  
const distancia = 200;              
const tempo = 4;                    


const distanciaPercorrida = calcularDistancia(nomePiloto, distancia, tempo);
console.log("A DISTÂNCIA PERCORRIDA PELO CARRO FOI: " + distanciaPercorrida + " KM ");