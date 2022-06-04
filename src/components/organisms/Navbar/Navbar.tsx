import { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon, Input } from '../../atoms'
import { getUser } from '../../../services/auth/useCases'

interface NavbarProps {
  search: string
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

const Navbar = ({ search, handleSearch }: NavbarProps) => {
  const [showSearch, setShowSearch] = useState(false)
  const toggleSearchBar = () => setShowSearch(!showSearch)
  const { isAuth } = getUser()

  return (
    <nav className='fixed left-0 right-0 bottom-0 py-5 px-10 bg-slate-900 bg-opacity-80 backdrop-blur-md rounded-tl-2xl rounded-tr-2xl'>
      <ul className='flex justify-between'>
        <li>
          <Link to='/'>
            <Icon type='filter' className='text-3xl' />
          </Link>
        </li>
        <li className='relative'>
          <div
            className={`absolute p-0.5 bg-slate-50 rounded-full text-center pointer-events-none transition-all duration-300 bottom-[200%] w-[80vw] left-4 -translate-x-1/2 ${
              showSearch
                ? 'opacity-1 pointer-events-auto scale-100 origin-bottom'
                : 'opacity-0 scale-0'
            }`}
          >
            <Input
              autoFocus={true}
              className='text-center'
              value={search}
              onChange={handleSearch}
            />
          </div>
          <Icon
            onClick={toggleSearchBar}
            type='search'
            className={`text-3xl cursor-pointer transition-all ${
              showSearch ? 'scale-125 origin-bottom' : ''
            }`}
          />
        </li>
        <li>
          <Link to={isAuth ? '/profile' : '/login'}>
            <Icon type='user' className='text-3xl' />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

Navbar.propTypes = {}

export { Navbar }
