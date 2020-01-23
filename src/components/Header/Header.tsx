import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'
import * as mus from '../../assets/oink.ogg'
import InoIcon from './InoIcon/InoIcon'

interface IMenu {
  text: string
  href: string
  id: number
}
 const Header: React.FC = () => {
  const audio: HTMLAudioElement = new Audio(mus)
  const menu: IMenu[] = [
    {
      text: 'Inosuke Goals',
      href: '/goals',
      id: 1
    },
    {
      text: 'ROFLgistration',
      href: '/formik',
      id: 2
    },
    {
      text: 'Home',
      href: '/',
      id: 3
    }
  ]
  const onHover = (): Promise<void> => {
    return audio.play()
    //<a href={item.href}>{item.text}</a>
  }
  return (
    <header>
      <NavLink id='logo' to='/'>
        <InoIcon onHover={() => onHover()} />
        <span>InosukeElectronics</span>
      </NavLink>
      <nav>
        <ul>
          {menu.map((item) => {
            return (
              <li key={item.id}><NavLink activeClassName='active' exact={true} to={item.href}>{item.text}</NavLink></li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header
