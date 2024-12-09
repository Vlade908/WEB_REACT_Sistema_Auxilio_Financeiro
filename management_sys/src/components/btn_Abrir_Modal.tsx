import { ReactNode, useState } from "react";
import Modal from "./modal";
import './btn_Abrir_Modal.css'
import { CadastroFornecedor } from "./CadastroFornecedor";

interface ChildrenProps{
    children?: ReactNode;
    text?: string;
    tipo?: number;
    
}




export default function BtnAbrir({tipo,text}:ChildrenProps) {
    const [openModal,setOpenModal] = useState(false);
    
    const getButtonText = () => {
        if (text) return text; // Se o texto for passado diretamente, usa-o
        switch (tipo) {
            case 1:
                return "Cadastrar Fornecedor";
            case 2:
                return "Abrir Modal Tipo 2";
            default:
                return "Abrir Modal";
        }
    };


    const renderModalContent = () => {
        switch (tipo) {
            case 1:
                return (
                <>
                    <Modal isOpen={openModal}>
                        <div>
                            <CadastroFornecedor text ='Cadastro Fornecedor'/>
                        </div>
                    </Modal>
                </>
                    
                );

            case 2:
                return (
                    <Modal isOpen={openModal}>
                        <div>
                            
                            <p>Este é o modal do tipo 2</p>
                        </div>
                    </Modal>
                );

            default:
                return (
                    <Modal isOpen={openModal}>
                        <div>
                            
                            <p>Tipo de modal não especificado.</p>
                        </div>
                    </Modal>
                );
        }
    };

    return(

        

        <div >
        
        <button id="btn" onClick={()=> setOpenModal(true)}>
            {getButtonText()}
        </button>
        {openModal && renderModalContent()}
        </div>


    )
}