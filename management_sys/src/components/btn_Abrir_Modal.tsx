import { useState } from "react";
import Modal from "./modal";
import { CadastroFornecedor } from "./CadastroFornecedor";


export default function BtnAbrir() {
    const [openModal,setOpenModal] = useState(false);
    return(
        <div>
        <button onClick={()=> setOpenModal(true)}>Abrir Modal</button>
        <Modal isOpen={openModal}>
        <CadastroFornecedor/>
        </Modal>
        </div>


    )
}