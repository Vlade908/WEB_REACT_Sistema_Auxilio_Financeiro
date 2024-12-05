
import logo from './IMGS/logo-fsdown.png';
import userIcon from './IMGS/icon-user.png';
import passIcon from './IMGS/icon-padlock.png';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './App.css';

const App = () => {

  const handleForgotPassword = () => {
    // Implementar lógica de navegação para "Esqueceu a senha"
    Swal.fire({
      title: "Recuperação de senha",
      text: "Função de recuperação de senha ainda não implementada.",
      icon: "info",
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica de login

    let exists = false;

    if(exists){
      Swal.fire({
        title: "Login",
        text: "Login realizado com sucesso!",
        icon: "success",
      });
    } else{
      Swal.fire({
        title: "Oops...",
        text: "O nome de usuário ou senha está incorreto. ",
        icon: "error",
      });
    }
    
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
      <h2>Entre com sua conta</h2>

      <form onSubmit={handleSubmit}>
        <label className="config-icone" htmlFor="usuario">
          <img
            className="icone"
            src={userIcon}
            alt="Ícone usuário"
          />
          <input
            type="text"
            name="usuario"
            id="usuario"
            placeholder="Usuário ou email"
            required
          />
        </label>
        <label className="config-icone" htmlFor="senha">
          <img
            className="icone"
            src={passIcon}
            alt="Ícone cadeado"
          />
          <input
            type="password"
            name="senha"
            id="senha"
            placeholder="Senha"
            required
          />
        </label>
        <label htmlFor="btnLogar" onClick={handleSubmit}>
          <input type="submit" id="btnLogar" value="Entrar" />
        </label>
      </form>

      <span className="span" onClick={handleForgotPassword}>
        Esqueceu a senha?
      </span>
    </main>
  </div>
  
  );
}

export default App;
