function criaCartao(categoria, pergunta, resposta) {
  const pista = document.getElementById('pista'); 

  const cartao = document.createElement('div'); 
  cartao.className = 'cartao-turbo';

  cartao.innerHTML = `
    <div class="motor">
      <div class="motor__face motor__pergunta">
        <h3>${categoria}</h3>
        <p>${pergunta}</p>
      </div>
      <div class="motor__face motor__resposta">
        <h3>Resposta</h3>
        <p>${resposta}</p>
      </div>
    </div>
  `;

  pista.appendChild(cartao);
}

// Exemplos de cartões
criaCartao(
  'Mecânica',
  'Qual a função do sistema de suspensão?',
  'Absorver impactos e manter a estabilidade do carro em movimento.'
);

criaCartao(
  'Curiosidades',
  'Qual é o carro mais rápido do mundo em 2024?',
  'Bugatti Chiron Super Sport 300+ — mais de 490 km/h.'
);

criaCartao(
  'Manutenção',
  'Por que trocar o óleo regularmente?',
  'Para lubrificar o motor, evitar superaquecimento e reduzir o desgaste.'
);
