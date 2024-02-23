import { Controller } from 'react-hook-form'

import { AddBlockItemDtoType } from '@/shared/api/generated'
import { Button, Select, type SelectOption, TextField } from '@/shared/ui'

import { useAddBlockItemForm } from '../../model'

const typeOptions: SelectOption[] = [
  {
    title: 'WebSite',
    value: AddBlockItemDtoType.Website,
  },
  {
    title: 'KeyWord',
    value: AddBlockItemDtoType.KeyWord,
  },
]

export const AddBlockItemForm = () => {
  const {
    clearErrors,
    control,
    formState: { errors },
    handleSubmit,
    isLoading,
    register,
    type,
  } = useAddBlockItemForm()

  return (
    <form className={'max-w-2xl m-auto flex flex-col gap-3'} noValidate onSubmit={handleSubmit}>
      <Controller
        control={control}
        name={'type'}
        render={({ field: { onChange, ...rest } }) => (
          <Select
            defaultValue={AddBlockItemDtoType.Website}
            onValueChange={value => {
              clearErrors('data')
              onChange(value)
            }}
            options={typeOptions}
            {...rest}
          />
        )}
      />

      <TextField
        {...register('data')}
        errorMessage={errors.data?.message}
        placeholder={`Enter ${type === 'KeyWord' ? 'Key Word' : 'WebSite'}...`}
      />

      <Button disabled={isLoading} type={'submit'}>
        Add Block Item
      </Button>
    </form>
  )
}
