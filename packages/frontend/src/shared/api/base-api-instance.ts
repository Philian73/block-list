import axios, { AxiosError, type AxiosRequestConfig } from 'axios'

export const baseApiInstance = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const createInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> => {
  return baseApiInstance({
    ...config,
    ...options,
  }).then(response => response.data)
}

export type BodyType<Data> = Data
export type ErrorType<Error> = AxiosError<Error>
