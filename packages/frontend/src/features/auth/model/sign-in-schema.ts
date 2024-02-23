import { type Output, email, minLength, object, string } from 'valibot'

const MIN_LENGTH_PASSWORD = 6

const errorMessages = {
  email: {
    minLength: 'Please enter your email.',
    valid: 'Please enter a valid email address.',
  },
  password: `Use ${MIN_LENGTH_PASSWORD} characters or more for your password.`,
}

export const signInSchema = object({
  email: string([minLength(1, errorMessages.email.minLength), email(errorMessages.email.valid)]),
  password: string([minLength(MIN_LENGTH_PASSWORD, errorMessages.password)]),
})

export type SignInData = Output<typeof signInSchema>
