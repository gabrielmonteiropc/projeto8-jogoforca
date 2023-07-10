import imagem1 from './../assets/forca0.png';
import imagem2 from './../assets/forca1.png';
import imagem3 from './../assets/forca2.png';
import imagem4 from './../assets/forca3.png';
import imagem5 from './../assets/forca4.png';
import imagem6 from './../assets/forca5.png';
import imagem7 from './../assets/forca6.png';
import palavras from './../palavras'


const imagens = [imagem1, imagem2, imagem3, imagem4, imagem5, imagem6, imagem7]

export default function Jogo({quantidadeErros, setquantidadeErros, sortearJogo, corPalavra, setcorPalavra, setDesabilitar, setpalavraSorteada, setsortearJogo, setLetras}) {

    function iniciar() {

        setDesabilitar(false);
        setLetras([]);
        setcorPalavra('preto');
        setquantidadeErros(0);
    
    
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

    return (
        <div className="container-forca">
            <img src={imagens[quantidadeErros]} alt="imagem da forca" />
            <button onClick={iniciar}>Escreva a palavra</button>
            <h1 className={corPalavra}> {sortearJogo} </h1>
        </div>
    )
}