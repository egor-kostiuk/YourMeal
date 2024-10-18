import { FC, ReactNode } from 'react'
import { Header } from '../header/Header'

interface IMainLayout {
  children: ReactNode
}

export const MainLayout: FC<IMainLayout> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      {/* TODO: footer */}
    </>
  )
}
