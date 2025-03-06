function calcularDivisaoPremio(valorPremio) {
    const numeroPessoas = 5;
    const valorPorPessoa = valorPremio / numeroPessoas;
    
    return valorPorPessoa;
  }
  
  const valorPremio = 1000.00;
  
  const valorPorPessoa = calcularDivisaoPremio(valorPremio);
  console.log(`Cada pessoa receberia R$ ${valorPorPessoa.toFixed(2)} do prêmio.`);