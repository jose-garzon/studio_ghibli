import type { LoginRes } from './auth.types'

const setUser = (user: LoginRes) => {
  window.localStorage.setItem('user', JSON.stringify(user))
}
const getUser = () => {
  const user = window.localStorage.getItem('user')
  if (user) {
    return { user: JSON.parse(user), isAuth: true }
  } else {
    return { user: null, isAuth: false }
  }
}

const logout = () => {
  window.localStorage.clear()
}

export { getUser, setUser, logout }
