import React from 'react'
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
      text: 'Oink.',
      href: 'https://goo.gl/Fxeifz',
      id: 1
    },
    {
      text: 'Oink?',
      href: 'https://goo.gl/Fxeifz',
      id: 2
    },
    {
      text: 'Oink!',
      href: 'https://goo.gl/Fxeifz',
      id: 3
    }
  ]
  const onHover = (): Promise<void> => {
    return audio.play()
  }
  return (
    <header>
      <a id='logo' href='https://goo.gl/Fxeifz'>
        <InoIcon onHover={() => onHover()} />
        <span>InosukeElectronics</span>
      </a>
      <nav>
        <ul>
          {menu.map((item) => {
            return (
              <li key={item.id}><a href={item.href}>{item.text}</a></li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header
