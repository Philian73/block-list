import axios, { AxiosError, type AxiosRequestConfig } from 'axios'

export const baseApiInstance = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const createInstance = async <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> => {
  const response = await baseApiInstance({ ...config, ...options })

  return response.data
}

export type BodyType<Data> = Data
export type ErrorType<Error> = AxiosError<Error>
