import { ReactNode, useState } from "react";
import Modal from "./modal";


interface ChildrenProps{
    children: ReactNode;
}

export default function BtnAbrir({children}:ChildrenProps) {
    const [openModal,setOpenModal] = useState(false);
    return(
        <div>
        <button onClick={()=> setOpenModal(true)}>Abrir Modal</button>
        <Modal isOpen={openModal}>
        <div>
            {children}
        </div>
        </Modal>
        </div>


    )
}