import { useState } from 'react';

import imagem1 from './assets/forca0.png';
import imagem2 from './assets/forca1.png';
import imagem3 from './assets/forca2.png';
import imagem4 from './assets/forca3.png';
import imagem5 from './assets/forca4.png';
import imagem6 from './assets/forca5.png';
import imagem7 from './assets/forca6.png';
import words from './words';

const palavrasAlfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

export default function App() {

  const [desabilitar, setDesabilitar] = useState(true);

  return (
    <div className="container-tela">
      <div className="container-forca">
        <img src={imagem1} alt="imagem da forca" />
        <button>Escreva a palavra</button>
        <h1>Palavra</h1>
      </div>

      <div className="container-letras">
        {palavrasAlfabeto.map(letra => <button disabled={desabilitar}>{letra}</button>)}
      </div>

      <div className="container-input">
        <span>Já sei a palavra</span>
        <input disabled={desabilitar}/>
        <button disabled={desabilitar}>Chute</button>
      </div>
    </div>
  );
}