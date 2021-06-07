import { FC, ReactNode, useReducer } from "react"
import styled from 'styled-components'
import { Sidebar, Header } from '../index'

interface LayoutProps {
    children: ReactNode
}

const Layout = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    /* display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: "header" "main"; */
    display: flex;
    flex-wrap: wrap;

    & header {
        flex: 1 1 100%;
    }
    /* & main {
        flex: 1 1 100%;
    } */

    @media(min-width: 640px) {
        & div:first-child {
            flex-basis: 300px;
        }

        flex-basis: calc(100% - 300px);
        /* grid-template-columns: 300px 1fr;
        grid-template-rows: auto 1fr;
        grid-template-areas: "header header" "sidebar main"; */
    }
`

const LayoutCustom: FC<LayoutProps> = ({ children }) => {
    const [on, toggle] = useReducer(v => !v, false)

    return (
        <Layout>
            <Header toggle={toggle} on={on}/>
            <Sidebar open={on} toggle={toggle}></Sidebar>
            { children }
        </Layout>
    )
}

export default LayoutCustom

