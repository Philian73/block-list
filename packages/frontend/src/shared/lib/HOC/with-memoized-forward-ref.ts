import { type ForwardRefRenderFunction, forwardRef, memo } from 'react'

export const withMemoizedForwardRef = <T, P = {}>(Component: ForwardRefRenderFunction<T, P>) => {
  return memo(forwardRef(Component))
}
