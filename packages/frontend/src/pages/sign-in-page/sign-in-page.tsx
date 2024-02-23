import { SignInForm } from '@/features/auth/ui'
import { FormPageLayout } from '@/shared/ui/layouts'
import { Header } from '@/widgets/header'

export const SignInPage = () => {
  return <FormPageLayout formSlot={<SignInForm />} headerSlot={<Header />} title={'Sign In'} />
}
