function calcularCustoCombustivel(distancia, consumo) {
    const precoCombustivel = 5.50; 
    const litrosNecessarios = distancia / consumo; 
    const custoTotal = litrosNecessarios * precoCombustivel; 
    
    return custoTotal;
  }
  
 
  const distancia = 300; 
  const consumo = 12; 
  
  const custo = calcularCustoCombustivel(distancia, consumo);
  console.log(`O custo do combustível para a viagem é R$ ${custo.toFixed(2)}`);