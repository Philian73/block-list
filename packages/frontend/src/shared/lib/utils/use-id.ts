import { useId as useReactId } from 'react'

export const useId = (idFromComponentProps?: string, suffix?: string) => {
  const generatedId = useReactId() + (suffix ?? '')

  return idFromComponentProps ?? generatedId
}
