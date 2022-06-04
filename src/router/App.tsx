import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MovieDetail, Home, Login, Profile } from '../pages'
import { Layout } from '../components/templates/Layout'
import { AuthProvider } from './AuthProvider'

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='profile' element={<Profile />} />
            <Route path='login' element={<Login />} />
            <Route path=':id' element={<MovieDetail />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
export { App }
