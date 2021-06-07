import { ReactNode, HTMLAttributes } from "react";

type Justify = 'left' | 'center' | 'right' | 'between'

export interface ButtonGroupProps extends HTMLAttributes<HTMLElement> {
    children?: ReactNode;
    vertical?: boolean;
    justify?: Justify
}