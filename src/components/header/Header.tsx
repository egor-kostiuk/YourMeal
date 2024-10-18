import { FC } from 'react'
import headerLogo from '../../assets/img/header-logo.svg'

import './Header.scss'


export const Header: FC = () => {
  return (
    <header className='header'>
      <div className='container header__container'>
        <img className='header__logo' src={headerLogo} alt='' />

        <div className='header__title-container'>
          <h1 className='header__title'>
            <span className='header__title-text'>Только самые</span>
            <span className='header__title-text header__title-text_red'>
              сочные бургеры!
            </span>
          </h1>

          <p className='header__appeal'>Бесплатная доставка от 599₴</p>
        </div>
      </div>
    </header>
  )
}
