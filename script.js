
function atbash_cipher(texto) {
  let alfabeto = 'abcdefghijklmnopqrstuvwxyz';
  texto = texto.toLowerCase();
  let cifrado = '';
  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i];
    if (alfabeto.includes(letra)) {
      let letra_cifrada = alfabeto.charAt(25 - alfabeto.indexOf(letra));
      cifrado += letra_cifrada;
    } else {
      cifrado += letra;
    }
  }
  return cifrado;
}


function contarLetras(text) {
    // Crie um objeto vazio para armazenar o número de ocorrências de cada letra
    let counts = {};
  
    // Itere por cada letra no texto
    for (let i = 0; i < text.length; i++) {
      let letter = text[i].toLowerCase();
  
      // Se a letra não for um espaço em branco, atualize seu contador de ocorrências
      if (letter !== " ") {
        counts[letter] = counts[letter] ? counts[letter] + 1 : 1;
      }
    }

    // Retorne o objeto de contagem
    return counts;
}
function calcularPercentualDasLetras(obj) {
    // Obtenha a soma de todos os valores do objeto
    const sum = Object.values(obj).reduce((total, val) => total + val);
  
    // Crie um novo objeto para armazenar os percentuais
    const percentages = {};
  
    // Itere por cada chave no objeto original
    for (let key in obj) {
      // Calcule o percentual correspondente
      const percent = (obj[key] / sum) * 100;
  
      // Adicione o percentual ao novo objeto
      percentages[key] = percent;
    }
  
    // Retorne o objeto com os percentuais
    return percentages;
}
function quantasVezesLetraApareceAntes(letra, texto) {
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    const vizinhos = {};
  
    // Inicializa o objeto de vizinhos com 0 para cada letra do alfabeto
    for (let i = 0; i < alfabeto.length; i++) {
      vizinhos[alfabeto[i]] = 0;
    }
  
    // Percorre o texto e verifica os vizinhos de cada letra
    for (let i = 0; i < texto.length; i++) {
      const atual = texto[i].toLowerCase();
  
      // Verifica se a letra atual é igual à letra informada e se tem vizinhos
      if (alfabeto.includes(atual) && atual === letra.toLowerCase() && i > 0 && i < texto.length - 1) {
        const anterior = texto[i - 1].toLowerCase();
        // const proximo = texto[i + 1].toLowerCase();
  
        // Incrementa o contador de vizinhos para a letra anterior
        if (alfabeto.includes(anterior)) {
          vizinhos[anterior]++;
        }
      }
    }
  
    // Retorna o objeto com a contagem de vizinhos para cada letra do alfabeto
    return vizinhos;
  }
function quantasVezesLetraApareceDepois(letra, texto) {
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    const vizinhos = {};
  
    // Inicializa o objeto de vizinhos com 0 para cada letra do alfabeto
    for (let i = 0; i < alfabeto.length; i++) {
      vizinhos[alfabeto[i]] = 0;
    }
  
    // Percorre o texto e verifica os vizinhos de cada letra
    for (let i = 0; i < texto.length; i++) {
      const atual = texto[i].toLowerCase();
  
      // Verifica se a letra atual é igual à letra informada e se tem vizinho
      if (alfabeto.includes(atual) && atual === letra.toLowerCase() && i > 0 && i < texto.length - 1) {
        const proximo = texto[i + 1].toLowerCase();
  
        // Incrementa o contador de vizinhos para a letra próxima
        if (alfabeto.includes(proximo)) {
          vizinhos[proximo]++;
        }
      }
    }
  
    // Retorna o objeto com a contagem de vizinhos para cada letra do alfabeto
    return vizinhos;
}
  

  // Exemplo de uso:
  let text = `PCQ VMJYPD LBYK LYSO KBXBJXWXV BXV ZCJPO EYPD
  KBXBJYUXJ LBJOO KCPK. CP LBO LBCMKXPV xpv IYJKL PYDBL,
  QBOP KBO BXV OPVOV LBO LXRO Cl SX'XJMI, KBO JCKO xpv
  EYKKOV LBO DJCMPV ZOICJO BYS, KXUYPD: 'DJOXL EYPD, ICJ X
  LBCMKXPV XPV cpo PYDBLK Y BXNO ZOOP JOACMPLYPD LC UCM
  LBO IXZROK Cl FXKL XDOK xpv LBO RODOPVK Cl XPAYOPL EYPDK.
  SXU Y SXEO KC ZCRV XK LC AJXNO X IXNCMJ Cl UCMJ SXGOKLU?'
  OFYRCDMO, LXROK IJCS LBO LBCMKXPV xpv cpo PYDBLK`;
  console.log(text);
  let letterCounts = contarLetras(text);
  console.log(letterCounts);
  console.log(calcularPercentualDasLetras(letterCounts));

  console.log("Aqui baixo eu vou fazer o teste da vizinhança");
  console.log(quantasVezesLetraApareceDepois("o",text.toLowerCase()));
  console.log(quantasVezesLetraApareceAntes("o",text.toLowerCase()));

  
  
  
  
