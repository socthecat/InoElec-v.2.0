import React from 'react'
import './Intro.scss'
//import * as head from '../../assets/logo-outline.svg'
import * as laugh from '../../assets/laugh.ogg'
import * as boy from '../../assets/vault-boy.png'
const head = require('../../assets/logo-outline.svg') as string;

const Intro: React.FC = () => {
  const audio: HTMLAudioElement = new Audio(laugh)

  return (
    <section id='intro'>
      <img src={boy} alt='boy' id='boy' />
      <div />
      <img onClick={() => { audio.play() }} src={head} alt='inosuke head' id='inosuke-head' />
    </section>
  )
}

export default Intro
