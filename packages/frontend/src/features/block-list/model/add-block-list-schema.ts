import { AddBlockItemDtoType } from '@/shared/api/generated'
import { type Output, literal, minLength, object, string, url, variant } from 'valibot'

const errorMessages = {
  keyWord: 'Please enter a key word',
  url: {
    minLength: 'Please enter website address',
    valid: 'Please enter a valid URL with http:// or https://',
  },
}

export const addBlockListSchema = variant('type', [
  object({
    data: string([minLength(1, errorMessages.url.minLength), url(errorMessages.url.valid)]),
    type: literal(AddBlockItemDtoType.Website),
  }),
  object({
    data: string([minLength(1, errorMessages.keyWord)]),
    type: literal(AddBlockItemDtoType.KeyWord),
  }),
])

export type AddBlockListData = Output<typeof addBlockListSchema>
