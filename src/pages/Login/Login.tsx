import { Icon, Input } from '../../components/atoms'
import { useAuth0 } from '@auth0/auth0-react'
import { login } from '../../services/auth/api'
import { getUser, setUser } from '../../services/auth/useCases'
import { FormEvent, useState, ChangeEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface LoginForm {
  user: string
  password: string
}

const Login = () => {
  const navigate = useNavigate()
  const [loginError, setLoginError] = useState('')
  const [loginData, setLoginData] = useState<LoginForm>({
    user: '',
    password: ''
  })
  const { loginWithRedirect } = useAuth0()

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    const name = event.target.name
    setLoginData({ ...loginData, [name]: value })
  }

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault()
    const { data, error } = await login(loginData)
    if (error) return setLoginError(error)
    setUser(data!)
    navigate('/')
  }

  return (
    <>
      <h1>Login</h1>
      <form className='flex flex-col gap-5 my-16' onSubmit={handleLogin}>
        <Input
          placeholder='User'
          value={loginData.user}
          name='user'
          className={`${loginError && 'border-red-500'}`}
          onChange={handleInputChange}
        />
        <Input
          placeholder='Password'
          type='password'
          value={loginData.password}
          name='password'
          className={`${loginError && 'border-red-500'}`}
          onChange={handleInputChange}
        />
        <p className='text-red-500 font-bold'>{loginError}</p>
        <button className='border bg-gradient-to-tr to-slate-700 from-slate-900 py-3 rounded-full'>
          Login
        </button>
      </form>
      <button
        onClick={() => loginWithRedirect()}
        className=' w-full border to-slate-700  py-3 rounded-full'
      >
        <Icon type='twitter' className='inline mr-5 text-xl' />
        Login with twitter
      </button>
    </>
  )
}

export { Login }
