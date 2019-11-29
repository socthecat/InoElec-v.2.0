import React, { Component } from 'react'
import './Intro.scss'
import head from '../../assets/logo-outline.svg'
import laugh from '../../assets/laugh.ogg'
import boy from '../../assets/vault-boy.png'

export default class Intro extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.audio = new Audio(laugh)
  }

  render () {
    return (
      <section id='intro'>
        <img src={boy} alt='boy' id='boy' />
        <div />
        <img onClick={() => { this.audio.play() }} src={head} alt='inosuke head' id='inosuke-head' />
      </section>
    )
  }
}
