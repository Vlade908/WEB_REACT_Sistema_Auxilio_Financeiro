import Login from "./Login"
import { CadastroFornecedor } from "./components/CadastroFornecedor";
import BtnAbrir from "./components/btn_Abrir_Modal";





function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Login/>
      <BtnAbrir text="Cadastrar Fornecedor">
        <CadastroFornecedor text ='Cadastro Fornecedor'/>
      </BtnAbrir>
      
      
      

    </>
  )

}

export default App
