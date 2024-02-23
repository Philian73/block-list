import { useForm } from 'react-hook-form'

import { authControllerSignUp } from '@/shared/api/generated'
import { ROUTES } from '@/shared/constants'
import { createDevToolWithoutSSR, getErrorMessage } from '@/shared/lib/utils'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'

import { type SignUpData, signUpSchema } from './'

const DevTool = createDevToolWithoutSSR<SignUpData>()

export const useSignUpForm = () => {
  const router = useRouter()

  const { control, formState, handleSubmit, register } = useForm<SignUpData>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
    },
    resolver: valibotResolver(signUpSchema),
  })

  const { error, isPending, mutate } = useMutation({
    mutationFn: authControllerSignUp,
    onSuccess() {
      router.push(ROUTES.HOME)
    },
  })

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
