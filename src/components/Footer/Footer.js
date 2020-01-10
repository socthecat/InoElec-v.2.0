import React from 'react'
import './Footer.scss'

export default function Footer (props) {
  console.log(
    '%c                           ',
    "line-height: 100px; display: block; background-image: url('https://thumbs.gfycat.com/EnormousDazzlingAtlanticridleyturtle-size_restricted.gif'); background-size: contain; background-repeat: no-repeat")
  console.log('%cСорян за помилки в консолі :(', 'font-size: 18px; color: orange')

  return (
    <footer>{props.footerText}</footer>
  )
}
