import { FC, ReactNode } from "react"

interface LayoutProps {
    children: ReactNode
}

const LayoutDefault: FC<LayoutProps> = ({ children }) => {
    return (
        <main>
            {children}
        </main>
    )
}

export default LayoutDefault