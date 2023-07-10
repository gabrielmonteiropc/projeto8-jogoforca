import { useState } from 'react';
import Jogo from './components/Jogo';
import Letras from './components/Letras';

export default function App() {

  const [desabilitar, setDesabilitar] = useState(true);
  const [palavraSorteada, setpalavraSorteada] = useState([]);
  const [quantidadeErros, setquantidadeErros] = useState(0);
  const [sortearJogo, setsortearJogo] = useState([]);
  const [corPalavra, setcorPalavra] = useState('preto');
  const [letras, setLetras] = useState([]);

  return (
    <div className="container-tela">

      <Jogo quantidadeErros={quantidadeErros} setquantidadeErros={setquantidadeErros} sortearJogo={sortearJogo} corPalavra={corPalavra} setcorPalavra={setcorPalavra} setDesabilitar={setDesabilitar} palavraSorteada={palavraSorteada} setpalavraSorteada={setpalavraSorteada} setsortearJogo={setsortearJogo} setLetras={setLetras} desabilitar={desabilitar}/>

      <Letras quantidadeErros={quantidadeErros} setquantidadeErros={setquantidadeErros} sortearJogo={sortearJogo} setsortearJogo={setsortearJogo} setcorPalavra={setcorPalavra} setDesabilitar={setDesabilitar} palavraSorteada={palavraSorteada} setpalavraSorteada={setpalavraSorteada} letras={letras} setLetras={setLetras} desabilitar={desabilitar}/>

      <div className="container-input">
        <span>Já sei a palavra</span>
        <input data-test="guess-input" disabled={desabilitar} />
        <button data-test="guess-button" disabled={desabilitar}>Chute</button>
      </div>
    </div>
  );
}