import { ReactNode } from "react";
declare global {
    declare namespace Types {
        export interface IconProps {
            className?: string;
        }
        export interface Props { };
        export type PropTypes<T, P> = T & P;
    }
}
export = Types;