import React from "react";
import EmailIcon from "./IMGS/icon-email.png"
import logo from "./IMGS/logo-fsdown.png"
import "./forgotPassword.css";
import Swal from "sweetalert2";

const ForgotPass = () => {
  const handleBackToLogin = () => {
    // Implementar a navegação para a tela de login
    Swal.fire({
      title: "Redirecionando...",
      text: "Você será levado para a tela de login.",
      icon: "info",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implementar a lógica de envio de recuperação de senha
    Swal.fire({
      title: "Recuperação de senha",
      text: "Instruções enviadas para o seu e-mail!",
      icon: "success",
    });
  };

  return (
    <div>
      <header>
        <img
          className="logo"
          src={logo}
          alt="Logo da Fundação Síndrome de Down"
        />
      </header>
      <main>
        <h2>Esqueceu senha</h2>

        <form onSubmit={handleSubmit}>
          <p>Digite seu e-mail cadastrado no sistema:</p>
          <label className="config-icone" htmlFor="email">
            <img
              className="icone"
              src={EmailIcon}
              alt="Ícone email"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
          </label>

          <div className="configBotao">
            <button
              type="button"
              id="btnVoltar"
              onClick={handleBackToLogin}
            >
              Voltar
            </button>
            <button type="submit" id="btnEnviar">
              Enviar
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ForgotPass;
