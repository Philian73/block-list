import { useForm } from 'react-hook-form'

import { useSignInMutation } from '@/entities/session'
import { createDevToolWithoutSSR, getErrorMessage } from '@/shared/lib/utils'
import { valibotResolver } from '@hookform/resolvers/valibot'

import { type SignInData, signInSchema } from './'

const DevTool = createDevToolWithoutSSR<SignInData>()

export const useSignInForm = () => {
  const { control, formState, handleSubmit, register } = useForm<SignInData>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: valibotResolver(signInSchema),
  })

  const { error, isPending, mutate } = useSignInMutation()

  const errorMessage = error ? getErrorMessage(error) : null

  return {
    DevTool,
    control,
    errorMessage,
    formState,
    handleSubmit: handleSubmit(data => mutate(data)),
    isLoading: isPending,
    register,
  }
}
