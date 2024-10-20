import { FC, ReactNode } from 'react'
import { Nav } from '../nav/Nav'

import './Main.scss'

interface IMain {
  children: ReactNode
}

export const Main: FC<IMain> = ({ children }) => {
  return (
    <main>
      <Nav />
      <section className='catalog'>
        <div className='container catalog__container'>{children}</div>
      </section>
    </main>
  )
}
