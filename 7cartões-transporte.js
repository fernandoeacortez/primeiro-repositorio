function calcularQuantosCartoes(custoCartao) {
    const valorDisponivel = 50.00; 
    const quantidadeCartoes = Math.floor(valorDisponivel / custoCartao); 
    
    return quantidadeCartoes;
  }
  
    const custoCartao = 5.50; 
  
  const quantidade = calcularQuantosCartoes(custoCartao);
  console.log(`Com R$ 50,00 você pode comprar ${quantidade} cartões.`);