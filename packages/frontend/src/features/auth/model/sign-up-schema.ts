import { type Output, custom, email, forward, minLength, object, string } from 'valibot'

const MIN_LENGTH_PASSWORD = 6

const errorMessages = {
  confirmPassword: {
    match: 'The two passwords do not match.',
    minLength: 'Please repeat the password once.',
  },
  email: {
    minLength: 'Please enter your email.',
    valid: 'Please enter a valid email address.',
  },
  password: `Use ${MIN_LENGTH_PASSWORD} characters or more for your password.`,
}

export const signUpSchema = object(
  {
    confirmPassword: string([
      minLength(MIN_LENGTH_PASSWORD, errorMessages.confirmPassword.minLength),
    ]),
    email: string([minLength(1, errorMessages.email.minLength), email(errorMessages.email.valid)]),
    password: string([minLength(MIN_LENGTH_PASSWORD, errorMessages.password)]),
  },
  [
    forward(
      custom(
        ({ confirmPassword, password }) => password === confirmPassword,
        errorMessages.confirmPassword.match
      ),
      ['confirmPassword']
    ),
  ]
)

export type SignUpData = Output<typeof signUpSchema>
