import { ReactNode, createContext, useContext, useState } from 'react'

interface IAuthProviderProps {
  children: ReactNode
}

interface IAuthContextType {
  isLoggedIn: boolean
}

const AuthContext = createContext<IAuthContextType | null>(null)

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) throw new Error('useAuth must be used within AuthProvider')

  return context
}

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [isLoggedIn, setIsLoggedin] = useState<boolean>(false)

  return <AuthContext.Provider value={{ isLoggedIn }}>{children}</AuthContext.Provider>
}

export default AuthProvider
