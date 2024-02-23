import { SignUpForm } from '@/features/auth/ui'
import { FormPageLayout } from '@/shared/ui/layouts'
import { Header } from '@/widgets/header'

export const SignUpPage = () => {
  return <FormPageLayout formSlot={<SignUpForm />} headerSlot={<Header />} title={'Sign Up'} />
}
