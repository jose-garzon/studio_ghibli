import axios, { AxiosError } from 'axios'
import { LoginReq, LoginRes, LoginResponse } from './auth.types'
const baseUrl = 'https://miapi-movies.herokuapp.com/movies/v1'

const login = async (body: LoginReq): Promise<LoginResponse> => {
  try {
    const response = await axios.post<{ data: LoginRes }>(
      `${baseUrl}/login`,
      body
    )
    return {
      status: response.status + '',
      data: response.data.data,
      state: 'success'
    }
  } catch (err) {
    const error = err as AxiosError<{ message: string }>
    return {
      status: error?.response?.status + '' || '500',
      error: error?.response?.data?.message || 'System error',
      state: 'error'
    }
  }
}

export { login }
