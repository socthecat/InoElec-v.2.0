// https://codepen.io/lbebber/pen/KwGEQv

import React from 'react'

function SVGFilter () {
  console.log(
    '%c                           ',
    "line-height: 100px; display: block; background-image: url('https://thumbs.gfycat.com/EnormousDazzlingAtlanticridleyturtle-size_restricted.gif'); background-size: contain; background-repeat: no-repeat")
  console.log('%cСорян за помилки в консолі :(', 'font-size: 18px; color: orange')
  return (
    <svg id='filterthing' xmlns='http://www.w3.org/2000/svg' version='1.1'>
      <defs>
        <filter id='squiggly-0'>
          <feTurbulence id='turbulence' baseFrequency='0.02' numOctaves='3' result='noise' seed='0' />
          <feDisplacementMap id='displacement' in='SourceGraphic' in2='noise' scale='6' />
        </filter>
        <filter id='squiggly-1'>
          <feTurbulence id='turbulence' baseFrequency='0.02' numOctaves='3' result='noise' seed='1' />
          <feDisplacementMap in='SourceGraphic' in2='noise' scale='8' />
        </filter>

        <filter id='squiggly-2'>
          <feTurbulence id='turbulence' baseFrequency='0.02' numOctaves='3' result='noise' seed='2' />
          <feDisplacementMap in='SourceGraphic' in2='noise' scale='6' />
        </filter>
        <filter id='squiggly-3'>
          <feTurbulence id='turbulence' baseFrequency='0.02' numOctaves='3' result='noise' seed='3' />
          <feDisplacementMap in='SourceGraphic' in2='noise' scale='8' />
        </filter>

        <filter id='squiggly-4'>
          <feTurbulence id='turbulence' baseFrequency='0.02' numOctaves='3' result='noise' seed='4' />
          <feDisplacementMap in='SourceGraphic' in2='noise' scale='6' />
        </filter>
      </defs>
    </svg>
  )
}

export default SVGFilter
