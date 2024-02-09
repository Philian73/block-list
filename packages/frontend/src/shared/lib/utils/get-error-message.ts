import { isAxiosError } from 'axios'

export const getErrorMessage = (error: unknown) => {
  let errorMessage = 'Some error occurred'

  if (isAxiosError(error)) {
    errorMessage = error.response?.data?.message ?? error?.message ?? errorMessage
  } else if (error instanceof Error) {
    errorMessage = `Native error: ${error.message}`
  } else {
    errorMessage = JSON.stringify(error)
  }

  return errorMessage
}
