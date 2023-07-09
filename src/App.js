import { useState } from 'react';

import imagem1 from './assets/forca0.png';
import imagem2 from './assets/forca1.png';
import imagem3 from './assets/forca2.png';
import imagem4 from './assets/forca3.png';
import imagem5 from './assets/forca4.png';
import imagem6 from './assets/forca5.png';
import imagem7 from './assets/forca6.png';
import palavras from './palavras';

const palavrasAlfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const imagens = [imagem1, imagem2, imagem3, imagem4, imagem5, imagem6, imagem7]

export default function App() {

  const [desabilitar, setDesabilitar] = useState(true);
  const [palavraSorteada, setpalavraSorteada] = useState([]);
  const [sortearJogo, setsortearJogo] = useState([]);
  const [letras, setLetras] = useState([...palavrasAlfabeto]);
  const [quantidadeErros, setquantidadeErros] = useState(0);

  function iniciar() {
    setDesabilitar(false);
    setLetras([]);

    sortearPalavra();
  }

  function sortearPalavra() {
    const palavrasSorteadas = Math.floor(Math.random() * palavras.length);

    const palavra = palavras[palavrasSorteadas];

    const arrayPalavras = palavra.split('');

    setpalavraSorteada(arrayPalavras);

    const underline = arrayPalavras.map(letra => ' _')
    setsortearJogo(underline);
  }

  function selecionarLetra(letra){
    const novoArray = [...letras, letra];
    console.log(novoArray);
    setLetras(novoArray);

    if(palavraSorteada.includes(letra)){
      console.log('acertou a letra');
    }else{
      const errosTotal = quantidadeErros + 1;
      setquantidadeErros(errosTotal);
    }

  }

  return (
    <div className="container-tela">
      <div className="container-forca">
        <img src={imagens[quantidadeErros]} alt="imagem da forca" />
        <button onClick={iniciar}>Escreva a palavra</button>
        <h1>{sortearJogo}</h1>
      </div>

      <div className="container-letras">
        {palavrasAlfabeto.map(letra => (
          <button
            key={letra}
            disabled={letras.includes(letra) ? true : false}
            onClick={ () => selecionarLetra(letra)}
            >
            {letra}
          </button>)
        )}
      </div>

      <div className="container-input">
        <span>Já sei a palavra</span>
        <input disabled={desabilitar} />
        <button disabled={desabilitar}>Chute</button>
      </div>
    </div>
  );
}