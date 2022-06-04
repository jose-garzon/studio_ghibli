import { Outlet } from 'react-router-dom'
import { Header } from '../../organisms'

const Layout = () => {
  return (
    <div className='p-5 h-screen bg-gradient-to-tr from-slate-900 to-slate-800 overflow-y-auto'>
      <Header />
      <Outlet />
    </div>
  )
}

export { Layout }
