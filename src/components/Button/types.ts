import { ReactNode, HTMLAttributes } from "react";

type sizes = 'sm' | 'md' | 'lg'
type colors = 'primary' | 'secondary'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    size?:  sizes;
    color?: colors;
    onlyIcon?: boolean;
    type?: 'button' | 'submit'
}