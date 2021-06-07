import { ReactNode } from "react";

export interface MenuProps {
    activator?: ReactNode;
    children?: ReactNode;
    on?: boolean;
    toggle?: any;
}