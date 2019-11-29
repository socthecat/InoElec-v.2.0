import React, { Component } from 'react'
import './Footer.scss'

export default class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <footer>{this.props.footerText}</footer>
    )
  }
}
