import { TiPlus, TiTimes } from "react-icons/ti";
import "./CadastroFornecedor.css"
import 'bootstrap/dist/css/bootstrap.min.css';



type CadastroFornecedorProps = {
    text?: string;
    onClose: () => void;

}

export function CadastroFornecedor(props: CadastroFornecedorProps){
    
    return(
        <>
            <div id="body">
                <div id="container">
                    <div id="reader">
                        <div id="capsula">
                            <div id="icon">
                                <TiPlus size="32"/>
                            </div>
                            <div id="Texto">
                            <p>{props.text}</p>
                            </div>
                        </div>
                        

                        <div id="fecharBtn">
                            <button id="fechadura" onClick={props.onClose} >
                                <TiTimes size="32" color="white"/>
                            </button>
                            
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


