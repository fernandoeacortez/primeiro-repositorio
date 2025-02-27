function verificarEstoque(produto, estoqueDisponivel, quantidadePedido) {
    if (quantidadePedido <= estoqueDisponivel) {
        console.log(`ESTOQUE SUFICIENTE PARA O PEDIDO DO PRODUTO: ${produto}`);
        return true; 
    } else {
        console.log(`ESTOQUE INSUFICIENTE PARA O PEDIDO DO PRODUTO: ${produto}`);
        return false; 
    }
}
const produto = "JEANS";    
const estoqueDisponivel = 25;    
const quantidadePedido = 24;   


const resultado = verificarEstoque(produto, estoqueDisponivel, quantidadePedido);
if (resultado) {
    console.log("PEDIDO PODE SER ATENDIDO.");
} else {
    console.log("NÃO É POSSÍVEL ATENDER O PEDIDO.");
}