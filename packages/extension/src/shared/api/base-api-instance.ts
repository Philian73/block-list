// custom-instance.ts

class ApiError extends Error {
  constructor(public data: unknown) {
    super('Api Error')
  }
}

const baseURL = 'http://localhost:3000' // use your own URL here or environment variable

export const createInstance = async <T>({
  data,
  headers,
  method,
  params,
  url,
}: {
  data?: BodyType<unknown>
  headers?: HeadersInit
  method: 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'
  params?: Record<string, string>
  responseType?: string
  url: string
}): Promise<T> => {
  const response = await fetch(`${baseURL}${url}` + new URLSearchParams(params), {
    credentials: 'include',
    headers,
    method,
    ...(data ? { body: JSON.stringify(data) } : {}),
  })

  if (!response.status.toString().startsWith('2')) {
    throw new ApiError(response)
  }

  return response.json()
}

export type BodyType<BodyData> = BodyData
export type ErrorType<Error> = Error
// In case you want to wrap the body type (optional)
// (if the custom instance is processing data before sending it, like changing the case for example)
