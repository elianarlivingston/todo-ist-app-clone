import { FC, ReactNode } from "react"
import styled from 'styled-components'

interface LayoutProps {
    children: ReactNode
}

const Layout = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 2rem 1rem;
    max-width: 800px;
    margin: 0 auto;
    overflow: hidden;
`

const LayoutDefault: FC<LayoutProps> = ({ children }) => {
    return (
        <Layout>
            {children}
        </Layout>
    )
}

export default LayoutDefault