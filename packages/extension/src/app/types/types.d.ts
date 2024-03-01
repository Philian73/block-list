import type {
   ComponentPropsWithoutRef,
   ElementRef,
   ElementType,
   ForwardedRef,
   PropsWithChildren
} from 'react'

type AsProp<T extends ElementType> = {
   as?: T
}

declare global {
   export type PolymorphicRef<T extends ElementType> = ForwardedRef<ElementRef<T>>

   export type PolymorphicComponentProp<T extends ElementType, P = {}> =
      PropsWithChildren<P & AsProp<T>>
      & Omit<ComponentPropsWithoutRef<T>, keyof (AsProp<T> & P)>

   export type PolymorphicComponentPropWithRef<T extends ElementType, P = {}> = PolymorphicComponentProp<T, P> & {
      ref?: PolymorphicRef<T>
   }
}

export {}