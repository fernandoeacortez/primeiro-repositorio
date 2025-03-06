function calcularIdade(anoNascimento) {
    const anoAtual = 2025;
    const idade = anoAtual - anoNascimento;
    
    return idade;
  }
  
 
  const anoNascimento = 1990;
  
  const idade = calcularIdade(anoNascimento);
  console.log(`A idade da pessoa é ${idade} anos.`);