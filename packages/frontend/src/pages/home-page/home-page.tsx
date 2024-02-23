import { AddBlockItemForm, BlockList } from '@/features/block-list/ui'
import { ToggleBlockingButton } from '@/features/toggle-blocking/ui'
import { Header } from '@/widgets/header'
import { Profile } from '@/widgets/profile'

export function HomePage() {
  return (
    <div className={'min-h-screen flex flex-col'}>
      <Header rightContentSlot={<Profile />} />

      <div className={'grid grid-cols-[200px_1fr]'}>
        <aside className={'px-5 pt-10'}>
          <ToggleBlockingButton />
        </aside>

        <main className={'pt-10 px-5'}>
          <h1 className={'text-2xl mb-8'}>Block List</h1>

          <AddBlockItemForm />

          <BlockList className={'mt-3'} />
        </main>
      </div>
    </div>
  )
}
