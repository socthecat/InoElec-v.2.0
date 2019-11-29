import React, { Component } from 'react'
import './Footer.scss'

export default class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    console.log(
      '%c                           ',
      "line-height: 100px; display: block; background-image: url('https://thumbs.gfycat.com/EnormousDazzlingAtlanticridleyturtle-size_restricted.gif'); background-size: contain; background-repeat: no-repeat")
    console.log('%cСорян за помилки в консолі :(', 'font-size: 18px; color: orange')
  }

  render () {
    return (
      <footer>{this.props.footerText}</footer>
    )
  }
}
