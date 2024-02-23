import type { ComponentPropsWithoutRef, FC } from 'react'

import { ROUTES } from '@/shared/constants'
import { Button, TextField } from '@/shared/ui'
import Link from 'next/link'

import { useSignUpForm } from '../../model'

type SignUpFormProps = Omit<ComponentPropsWithoutRef<'form'>, 'onSubmit'>

export const SignUpForm: FC<SignUpFormProps> = props => {
  const {
    DevTool,
    control,
    errorMessage,
    formState: { errors },
    handleSubmit,
    isLoading,
    register,
  } = useSignUpForm()

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
        autoComplete={'off'}
        errorMessage={errors?.password?.message}
        label={'Password'}
        spellCheck={false}
        type={'password'}
        {...register('password')}
      />

      <TextField
        autoCapitalize={'off'}
        autoComplete={'off'}
        errorMessage={errors?.confirmPassword?.message}
        label={'Confirm password'}
        spellCheck={false}
        type={'password'}
        {...register('confirmPassword')}
      />

      <Button disabled={isLoading} type={'submit'}>
        Sign Up
      </Button>

      <Button as={Link} className={'text-center'} href={ROUTES.SIGN_IN} variant={'link'}>
        Sign In
      </Button>

      {!!errorMessage && errorMessage?.length && (
        <div className={'text-rose-500'}>{errorMessage}</div>
      )}

      {process.env.NODE_ENV === 'development' && <DevTool control={control} />}
    </form>
  )
}
