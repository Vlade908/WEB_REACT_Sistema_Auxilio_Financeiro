
import React, { ReactNode} from "react"

interface ModalProps {
    isOpen: boolean;
    children: ReactNode;
}


const BACKGROUND_STYLE: React.CSSProperties = {
    position: 'fixed',
    top:'0',
    bottom:'0',
    left:'0',
    right:'0',
    zIndex:1000,
    opacity: 0,
    transition: 'opacity 3s ease-in-out', // Transição suave de opacidade
 
}

const MODAL_STYLE: React.CSSProperties = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '150px',
    transition: 'opacity 3s ease, transform 3 ease',

    
}




export default function Modal({ isOpen, children }: ModalProps){
    if(!isOpen) return null

    if(isOpen){
        return(
            <>
                <div style={{...BACKGROUND_STYLE, opacity:1,
                }}>
                    <div style={{
                        ...MODAL_STYLE,
                        opacity: isOpen ? 1 : 0,
                        transform: isOpen
                            ? 'translate(-50%, -50%) scale(1)'
                            : 'translate(-50%, -50%) scale(0.9)',
                    }}>{children}</div>
                    
                </div>
            </>
        )
    }
    return null

}