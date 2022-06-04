interface LoginReq {
  user: string
  password: string
}

interface LoginRes {
  name: string
}

interface LoginResponse {
  data?: LoginRes
  error?: string
  status: string
  state: 'success' | 'error'
}

export type { LoginReq, LoginRes, LoginResponse }
