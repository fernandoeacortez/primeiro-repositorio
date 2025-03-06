
function calcularTroco(valorCompra, valorPago) {
   
    if(valorPago < valorCompra){
        return "O VALOR PAGO É INSUFICIENTE PARA COBRIR O VALOR DA COMPRA.";
    }
    
    const troco = valorPago - valorCompra;
    return troco;
}

const valorCompra = 100.50;  
const valorPago = 150.00;    


const troco = calcularTroco(valorCompra, valorPago);
console.log("O TROCO A SER DEVOLVIDO É: R$ " + troco.toFixed(2));