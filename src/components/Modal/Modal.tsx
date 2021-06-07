import { FC, useRef, useEffect } from 'react'
import React from 'react-dom'
import { ModalProps } from './types'
import { ModalWraper, ModalContainer } from './styles'

const portal = document.getElementById('portal')

const Modal: FC<ModalProps> = (props) => {
    const { children, on, toggle } = props

    const modal = useRef<HTMLDivElement>(null)
    
    const handlerKeyDown = (event: any) => {
        const key: string = event.key

        if(key === 'Escape') {
            toggle(false)
        }
    }

    useEffect(() => {
        if(on) {
            modal.current?.focus()
        }
    }, [on])

    return portal && React.createPortal(
        on && (
            <ModalWraper
                onClick={() => toggle(false)}
            >
                <ModalContainer
                    tabIndex={3}
                    ref={modal}
                    onKeyDown={handlerKeyDown}
                    onClick={(e: any) => e.stopPropagation()}
                >
                    { children }
                </ModalContainer>
            </ModalWraper>
        )
        ,
        portal
    )
}

export default Modal