import styled from 'styled-components'
import { SidebarProps } from './types'

export const SidebarWraper = styled.div`
    width: 100vw;
    height: 100%;
    position: ${(props: SidebarProps) => props.open ? 'static' :'fixed' };
    top: 50px;
    right: 0;
    bottom: 0;
    left: ${(props: SidebarProps) => props.open ? '0' :'-100%' };
    transition: all .3s ease-in-out;
    background-color: ${(props: SidebarProps) => props.open ? 'rgba(0, 0, 0, 0.25)' : 'transparent' }; 

    @media(min-width: 640px) {
        width: 300px;
        background-color: transparent;
    }
`

export const SidebarStyle = styled.aside`
    width: 80%;
    height: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;

    @media(min-width: 640px) {
        width: 100%;
        padding-left: 3rem;
    }
`