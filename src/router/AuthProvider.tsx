import { Auth0Provider, AppState } from '@auth0/auth0-react'
import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

interface AuthProviderProps {
  children: ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate()
  const domain = import.meta.env.VITE_AUTH0_DOMAIN || ''
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID || ''

  const onRedirectCallback = (appState: AppState | undefined) => {
    navigate(appState?.returnTo || window.location.pathname)
  }
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  )
}

export { AuthProvider }
