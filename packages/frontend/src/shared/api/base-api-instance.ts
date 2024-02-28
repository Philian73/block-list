import axios, { AxiosError, type AxiosRequestConfig } from 'axios'

export const baseApiInstance = axios.create({
  baseURL: 'https://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
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
