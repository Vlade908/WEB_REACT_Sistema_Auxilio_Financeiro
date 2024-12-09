import { ReactNode, useState } from "react";
import Modal from "./modal";
import './btn_Abrir_Modal.css'

interface ChildrenProps{
    children: ReactNode;
    text?: string;
}



export default function BtnAbrir(props: ChildrenProps,{children}:ChildrenProps) {
    const [openModal,setOpenModal] = useState(false);
    return(
        <div >
        <button id="btn" onClick={()=> setOpenModal(true)}>{props.text}</button>
        <Modal isOpen={openModal}>
        <div>
            {children}
        </div>
        </Modal>
        </div>


    )
}