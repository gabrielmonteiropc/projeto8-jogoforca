export default function Letras({quantidadeErros, setquantidadeErros, sortearJogo, setsortearJogo, setcorPalavra, setDesabilitar, palavraSorteada, letras, setLetras}) {

    function selecionarLetra(letra) {
        const novoArray = [...letras, letra];
        setLetras(novoArray);

        if (palavraSorteada.includes(letra)) {
            acertouLetra(letra);

        } else {
            errouLetra();
        }
    }

    function acertouLetra(letra) {
        const novaPalavraForca = [...sortearJogo]
    
        palavraSorteada.forEach((l, indice) => {
          if (l === letra) {
            novaPalavraForca[indice] = l;
          }
        })
    
        setsortearJogo(novaPalavraForca);
    
        if (palavraSorteada.join('') === novaPalavraForca.join('')) {
          setcorPalavra('verde');
          desligarJogo();
        }
      }
    
      function errouLetra() {
        const errosTotal = quantidadeErros + 1;
        setquantidadeErros(errosTotal);
        if (errosTotal === 6) {
          setsortearJogo(palavraSorteada);
          setcorPalavra('vermelho');
          desligarJogo();
    
        }
      }

      function desligarJogo() {

        setDesabilitar(true);
        setLetras([...palavrasAlfabeto]);
      }

    return (
        <div className="container-letras">
            {palavrasAlfabeto.map(letra => (
                <button
                    key={letra}
                    disabled={letras.includes(letra) ? true : false}
                    onClick={() => selecionarLetra(letra)}
                >
                    {letra}
                </button>)
            )}
        </div>
    )
}