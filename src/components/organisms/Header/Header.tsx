import { getUser, logout } from '../../../services/auth/useCases'
import { useLocation, useNavigate } from 'react-router-dom'
import { Icon } from '../../atoms'

const Header = () => {
  const { isAuth, user } = getUser()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const goBack = () => navigate(-1)
  const handleLogout = () => {
    logout()
    navigate('/')
    window.location.reload()
  }

  return (
    <header className='mb-5 flex justify-between items-start'>
      <div>
        {pathname !== '/' && (
          <button className='flex items-center gap-2 mb-2' onClick={goBack}>
            <Icon className='inline' type='back' /> Go back
          </button>
        )}
        <div>
          <p className='text-lg font-bold'>Studio Ghibli Tracker</p>
          {isAuth && <h2 className='text-indigo-400'>{user.name}</h2>}
        </div>
      </div>
      {isAuth && (
        <button
          className='border rounded-full px-4 py-1'
          onClick={handleLogout}
        >
          Logout
        </button>
      )}
    </header>
  )
}

export { Header }
