import React from 'react'
import './Intro.scss'
import head from '../../assets/logo-outline.svg'
import laugh from '../../assets/laugh.ogg'
import boy from '../../assets/vault-boy.png'

export default function Intro (props) {
  const audio = new Audio(laugh)

  return (
    <section id='intro'>
      <img src={boy} alt='boy' id='boy' />
      <div />
      <img onClick={() => { audio.play() }} src={head} alt='inosuke head' id='inosuke-head' />
    </section>
  )
}
