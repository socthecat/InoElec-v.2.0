import React, { useState, useEffect, FormEvent } from 'react'
import './Cards.scss'
import update from 'immutability-helper'
import starships from '../../services/services'
import Card from './Card/Card'

interface IProps {
  title: string
}

const Cards: React.FC<IProps> = (props) => {
  // refs
  const titleRef = React.createRef<HTMLInputElement>()
  const textRef = React.createRef<HTMLTextAreaElement>()

  // state
  const [cards, setCards] = useState([
    {
      title: 'test',
      text: 'test',
      id: 22
    }
  ])
  const [showForm, setShowForm] = useState(false)
  const [nextId, setNextId] = useState(0)

  useEffect(() => {
    starships.get('').then((sh: { data: { results: string | any[] } }) => {
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

  function findAndReplace (id: number, title: string, text: string) {
    const arr = Object.assign(cards)
    arr.find((o: { id: number }, i: React.ReactText) => {
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

  function addItem (e: FormEvent) {
    e.preventDefault()
    if(titleRef.current && textRef.current){
      const title = titleRef.current.value
      const text = textRef.current.value
      if (text && title) {
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

export default Cards
