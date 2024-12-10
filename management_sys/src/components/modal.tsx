
import React, { ReactNode } from "react"

const BACKGROUND_STYLE: React.CSSProperties = {
    position: 'fixed',
    top:'0',
    bottom:'0',
    left:'0',
    right:'0',
    zIndex:'1000',
    transition:'5s'
}

const MODAL_STYLE: React.CSSProperties = {
    position:'fixed',
    top:'50%',
    left:'50%',
    transform:'translate(-50%,-50%)',
    padding:'150px',
    transition:'5s'

    
}



interface ModalProps {
    isOpen: boolean;
    children: ReactNode;
}

export default function Modal({ isOpen, children }: ModalProps){
    if(!isOpen) return null

    if(isOpen){
        return(
            <>
                <div style={BACKGROUND_STYLE}>
                    <div style={MODAL_STYLE}>{children}</div>
                    
                </div>
            </>
        )
    }
    return null

}