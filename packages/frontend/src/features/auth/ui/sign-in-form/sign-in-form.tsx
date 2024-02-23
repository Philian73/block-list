import { ComponentPropsWithoutRef, FC } from 'react'

import { ROUTES } from '@/shared/constants'
import { Button, TextField } from '@/shared/ui'
import Link from 'next/link'

import { useSignInForm } from '../../model'

type SignInFormProps = Omit<ComponentPropsWithoutRef<'form'>, 'onSubmit'>

export const SignInForm: FC<SignInFormProps> = props => {
  const {
    DevTool,
    control,
    errorMessage,
    formState: { errors },
    handleSubmit,
    isLoading,
    register,
  } = useSignInForm()

  return (
    <form
      className={'flex flex-col gap-2'}
      method={'post'}
      noValidate
      {...props}
      onSubmit={handleSubmit}
    >
      <TextField
        autoCapitalize={'off'}
        autoComplete={'email'}
        errorMessage={errors?.email?.message}
        label={'Email'}
        spellCheck={false}
        type={'email'}
        {...register('email')}
      />

      <TextField
        autoCapitalize={'off'}
        autoComplete={'password'}
        errorMessage={errors?.password?.message}
        label={'Password'}
        spellCheck={false}
        type={'password'}
        {...register('password')}
      />

      <Button className={'mb-6'} disabled={isLoading} type={'submit'}>
        Sign In
      </Button>

      <div className={'text-center'}>
        <span>Don`&#39;t have an account?</span>
        <Button as={Link} href={ROUTES.SIGN_UP} variant={'link'}>
          Sign Up
        </Button>
      </div>

      {!!errorMessage && errorMessage?.length && (
        <div className={'text-rose-500'}>{errorMessage}</div>
      )}

      {process.env.NODE_ENV === 'development' && <DevTool control={control} />}
    </form>
  )
}
