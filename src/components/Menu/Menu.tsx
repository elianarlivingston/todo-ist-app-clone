import { FC, useState, useRef, useEffect } from 'react'
import React from 'react-dom'
import { MenuProps } from './types'
import { MenuStyle } from '../../styles/Menu'
import { Button } from '../index'

const portal = document.getElementById('portal')

const Menu: FC<MenuProps> = (props) => {
    const { children, activator, on, toggle } = props
    const [clickPosition, setClickPosition] = useState({
        x: 0,
        y: 0
    })
    const menu = useRef<HTMLUListElement>(null)

    const handlerClick = (event: any): void => {
        const optionsPosition = {
            x: event.clientX,
            y: event.clientY
        }
        setClickPosition(optionsPosition)
        toggle(true)
    }

    const resizeMenu = () => {
        if(!menu.current) return 

        toggle(false)

        const menuWidth: number = (menu.current && menu.current?.offsetWidth) || 0
        const menuHeight: number = (menu.current && menu.current?.offsetHeight) || 0

        if( window.innerWidth - (menuWidth + clickPosition.x) >= 0 ) {
            menu.current.style.left = `${clickPosition.x}px`
        } else {
            menu.current.style.right = `${window.innerWidth - menuWidth}px`
        }

        if( window.innerHeight - (menuHeight + clickPosition.y) >= 0 ) {
            menu.current.style.top = `${clickPosition.y}px` 
        } else {
            menu.current.style.top = `${window.innerHeight - menuHeight}px`
        }

        toggle(true)
    }

    useEffect(() => {
        resizeMenu()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [clickPosition]);

    useEffect(() => {
        window.addEventListener('click', (event: any) => {
            const id = event.target.id
            if(id !== 'menu' && on) {
                toggle(false)
            }
        })
    });

    return (
        <div
            id="menu"
        >
            <Button 
                id="button-menu"
                color="secondary"
                onlyIcon={true}
                aria-haspopup={on} 
                aria-controls="menu" 
                aria-expanded={on} 
                onClick={handlerClick}
            >
                { activator }
            </Button>

            {
                portal && 
                React.createPortal(
                    on && (
                        <MenuStyle
                            ref={menu}
                            role="menu"
                            aria-labelledby="button-menu"
                            id="menu"
                            style={{
                                display: on ? 'flex' : 'none'
                            }}
                        >
                            { children }
                        </MenuStyle>
                    )
                    ,
                    portal   
                )
            }
        </div>
    )
}

export default Menu