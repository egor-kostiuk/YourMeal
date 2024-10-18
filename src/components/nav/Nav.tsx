import { FC } from 'react'
import { food } from '../../helpers/food.json'

import './Nav.scss'

export const Nav: FC = () => {
  return (
    <nav className='navigation'>
      <div className='container navigation__container'>
        <ul className='navigation__list'>
          {food.map((dish) => (
            <li key={dish.title} className='navigation__item'>
              <button className={`navigation__button ${dish.className}`}>
                {dish.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
