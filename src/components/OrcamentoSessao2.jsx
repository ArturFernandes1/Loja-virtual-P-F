import React from "react";
import "../components/OrcamentoSessao2.css";


function OrcamentoSessao2() {
  return (
    
    <div className="container-forms">
        <div className="formulario">
        <h1 className="frase-orientacao">Preencha os dados com atenção</h1>
          <form action="enviar_email.php" method="post">
            <div id="text-anexar">
              <label htmlFor="anexar-projeto">Anexar seu projeto</label>
              <input type="file" id="anexar-projeto" name="projeto" />
            </div>
            <div>
              <input type="text" name="nome" placeholder="Nome" />
              <input type="email" name="email" placeholder="E-mail" />
            </div>
            <div>
              <input type="text" name="Cidade" placeholder="Cidade" />
              <input type="text" name="telefone" placeholder="Telefone" />
            </div>
            <div>
              <input type="text" name="bairro" placeholder="Bairro do Imóvel" />
              <input type="date" name="data" />
            </div>
            <div id="descricao">
              <textarea
                cols="50"
                rows="8"
                minLength="111"
                maxLength="170"
                name="mensagem"
                placeholder="Fale um pouco como quer o seu projeto."
              ></textarea>
            </div>
            <div className="buttons">
              <button id="button1" type="submit">Enviar</button>
              <button id="button2" type="reset">Limpar</button>
            </div>
          </form>
        </div>
      </div>
  
  );
}

export default OrcamentoSessao2;

