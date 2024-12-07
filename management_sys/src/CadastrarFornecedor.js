import { TiPlus } from "react-icons/ti";
import "./CadastrarFornecedor.css"
import 'bootstrap/dist/css/bootstrap.min.css';




const CadastroFornecedor =() =>{
    
    return(
        <>
            <div id="body">
                <div id="container">
                    <div id="reader">
                        <div id="icon">
                            <TiPlus size="32"/>
                        </div>
                        <div id="Texto">
                        <p>Cadastrar Fornecedor</p>
                        </div>

                    </div>
                    <div id="main">
                         {/* Primeira linha: Nome do fornecedor e CPF/CNPJ */}
                        <div id="inp1">
                            <input type="text" placeholder="Nome do fornecedor *" />
                            <input type="text" placeholder="CPF/CNPJ *" />
                        </div>

                        {/* Campo de email */}
                        <input type="email" placeholder="Email do fornecedor" />

                        {/* Segunda linha: Nome do banco e Número da conta */}
                        <div id="bancoInfo">
                            <input type="text" placeholder="Nome do banco *" />
                            <input type="text" placeholder="Número da conta *" />
                        </div>

                        {/* Select: Centro de custo */}
                        <select>
                            <option value="" disabled selected>Centro de custo *</option>
                            <option value="SUS">SUS</option>
                            {/* Adicione mais opções aqui */}
                        </select>
                    </div>
                    <div id="footer">
                        <button>SALVAR</button>
                    </div>
                </div>
            </div>
            
        </>
    );
}
export default CadastroFornecedor;


