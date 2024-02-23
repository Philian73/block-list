import { useSessionQuery } from '@/entities/session'
import { SignOut } from '@/features/auth/ui'

export const Profile = () => {
  const { data: session } = useSessionQuery()

  if (!session) {
    return null
  }

  return (
    <div className={'flex gap-2 items-center'}>
      <span>{session?.email}</span>
      <SignOut />
    </div>
  )
}
