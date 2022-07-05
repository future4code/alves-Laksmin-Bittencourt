import { useState } from "react";

function Post(props) {
  const [curtindo, setCurtindo] = useState(false);
  const [valorCurtida, setValorCurtida] = useState(0);
  const [comentando, setComentando] = useState(false);
  const [valorComentarios, setValorComentarios] = useState(0);
  const [inputComentario, setvalorInputcomentario] = useState(" ");
  const [arrayComentarios, setArrayComentarios] = useState([" "]);

  
  const handleInput = (e) => {
    setvalorInputcomentario(e.target.value);
  };

  const addComentario = () => {
    setArrayComentarios([...arrayComentarios, inputComentario]);
    inputComentario("");
  };

  console.log(arrayComentarios);

  const soma = () => {
    setValorCurtida(valorCurtida +1)
  }

  const subtrai = () => {
    setValorCurtida(valorCurtida -1)
  }


  // Passo7
  const onClickCurtida = () => {
    // Crie a lógica de onClickCurtida aqui.
  };

  // Passo7
  const onClickComentario = () => {
    // Crie a lógica de onClickComentario aqui.
  };

  // Passo7
  const onChangeComentario = (event) => {
    // Crie a lógica de onChangeComentario aqui.
  };

  // Passo7
  const enviarComentario = (comentario) => {
    // Crie a lógica de enviarComentario aqui.
  };

  {/* Passo6 */}
  const caixaDeComentario = true ? (
    <>
      <label htmlFor={"comentario"} >Comente: </label>
      {/* Passo4 */}
      <input
        id={"comentario"}
        value={""}
      />
      {/* Passo4 */}
      <button >Enviar</button>
    </>
  ) : (
    // Passo8
    <>Lógica de exibir lista de comentarios</>
    // this.state.comentarios.map((comentario, index) => {
    //   return (
    //     <div key={index}>
    //       <p>{comentario}</p>
    //     </div>
    //   )
    // })
  );

  return (
    <main>
      <header>
        <figure>
          {/* Passo3 */}
          <img src= {props.fotoUsuario} alt={'Imagem do usuario'} />
          <span>Lakshmi</span>
        </figure>
      </header>
      <hr />
      <main>
        <figure>
          {/* Passo3 */}
          <p>{`"Acordar para quem você é requer desapego de quem você imagina ser" (Alan Watts)`}</p>
          <img src={props.fotoPost} alt={'Imagem do post'} />
        </figure>
      </main>
      <hr />
      <footer>
        <section>
          {/* Passo6 */}
          <span>Número de curtidas: 0</span>
          {/* Passo4 */}
          <button >
            {/* Passo6 */}
            {true ? "Like" : "Dislike"}
          </button >
        </section>
        <section>
          {/* Passo6 */}
          <span>Número de comentários: 0</span>
          {/* Passo4 */}
          <button >
            {/* Passo6 */}
            {false ? "Fechar comentário" : "Adicionar comentário"}
          </button>
          <h4>Comentários</h4>
          {caixaDeComentario}
        </section>
      </footer>
    </main>
  );
};

export default Post;