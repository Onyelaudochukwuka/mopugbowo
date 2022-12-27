/* eslint-disable @typescript-eslint/no-empty-interface */
declare global {
  declare namespace Types {
    export interface IconProps {
      className?: string
      onClick?: () => void
    }
    export interface Props { }
    export type PropTypes<T, P> = T & P;
  }
}
export = Types;
