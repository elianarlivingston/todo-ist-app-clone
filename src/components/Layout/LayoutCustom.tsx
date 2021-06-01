import { FC, ReactNode } from "react"

interface LayoutProps {
    children: ReactNode
}

const LayoutCustom: FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <header>Header</header>
            <aside>Sidebar</aside>
            <main>{ children }</main>
        </div>
    )
}

export default LayoutCustom