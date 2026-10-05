function intervalScheduling(atracoes) {
  // 1. Ordena pelo horário de término
  const ordenadas = [...atracoes].sort((a, b) => a.fim - b.fim);

  const escolhidas = [];
  const deFora = [];
  let fimDaUltima = 0; // quando termina a última atração que entrou

  for (const atracao of ordenadas) {
    if (atracao.inicio >= fimDaUltima) {
      // nao tem conflito: entra
      escolhidas.push(atracao);
      fimDaUltima = atracao.fim;
    } else {
      // tem conflito: nao entra
      deFora.push(atracao);
    }
  }

  return { escolhidas, deFora };
}
