import React, { Component } from 'react'
import './Cards.scss'

export default class Header extends Component {
  constructor (props) {
    super(props)
    this.cards = [
      {
        title: 'Inske strong!!!',
        text: 'Isknoe beat ervbody AND theyre mums!!! And u!! Nooone beat Inksoe!! Only very stron be strnog as Inoske but yu no strong you weak!',
        id: 1
      },
      {
        title: 'Good swords!!',
        text: 'My swords r as strong as me! Can beat evryone with swords!! When swords break get new sword but swords neve r braek!',
        id: 2
      },
      {
        title: 'Remember name',
        text: 'Remember evr nme and can spell gud. When spell bad reread. never forget anything please trust'
      }
    ]
  }

  render () {
    return (
      <section id='cards'>
        <h2>{this.props.title}</h2>
        <div id='cards-wrapper'>
          {this.cards.map((card) => {
            return (
              <div className='card' key={card.id}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            )
          })}
        </div>
      </section>
    )
  }
}
