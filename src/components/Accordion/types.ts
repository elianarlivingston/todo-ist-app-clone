import { ReactNode } from "react";

export interface AccordionProps {
    children?: ReactNode;
    title?: string;
    handlerClick?: any;
}