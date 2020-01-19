import React, { useState, useEffect } from 'react'
import './Cards.scss'
import update from 'immutability-helper'
import starships from '../../services/services'
import Card from './Card/Card'

export default function Cards (props) {
  // refs
  const titleRef = React.createRef()
  const textRef = React.createRef()

  // state
  const [cards, setCards] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [nextId, setNextId] = useState(0)

  useEffect(() => {
    starships.get().then(sh => {
      const arr = []
      for (let i = 0; i < sh.data.results.length; i++) {
        arr.push(
          {
            title: sh.data.results[i].name,
            text: sh.data.results[i].model + ', ' + sh.data.results[i].manufacturer,
            id: i
          }
        )
      }
      setCards(arr)
      setNextId(sh.data.results.length + 1)
      return arr
    })
  }, [])

  function addItemForm () {
    return (
      <form onSubmit={addItem}>
        <input type='text' ref={titleRef} placeholder='Title' />
        <textarea ref={textRef} placeholder='Text' />
        <button type='submit'>Add</button>
      </form>
    )
  }

  function findAndReplace (id, title, text) {
    const arr = Object.assign(cards)
    arr.find((o, i) => {
      if (o.id === id) {
        arr[i] = { title: title, text: text, id: id }
        return true
      }
      return false
    })
    const newCard = update(cards, {
      $set: arr
    })
    setCards(newCard)
  }

  function addItem (e) {
    e.preventDefault()
    const title = titleRef.current.value
    const text = textRef.current.value
    if (text !== '' && title !== '') {
      const newCard = update(cards, {
        $push: [{
          title: title,
          text: text,
          id: nextId
        }]
      })
      setCards(newCard)
      setNextId(nextId + 1)
    }
    setShowForm(false)
  }

  return (
    <section id='cards'>
      <h2>{props.title}</h2>
      <div id='cards-wrapper'>
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              text={card.text}
              findAndReplace={findAndReplace}
            />
          )
        })}
      </div>
      {!showForm && <button onClick={() => setShowForm(true)}>+</button>}
      {showForm && addItemForm()}
    </section>
  )
}
