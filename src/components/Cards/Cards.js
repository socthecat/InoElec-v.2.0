import React, { useState, useEffect } from 'react'
import './Cards.scss'
import update from 'immutability-helper'
import starships from '../../services/services'

export default function Cards (props) {
  // refs
  const titleRef = React.createRef()
  const textRef = React.createRef()

  // state
  const [cards, setCards] = useState([])
  const [switcharoo, setSwitcharoo] = useState(false)
  const [switchajing, setSwitchajing] = useState(false)
  const [tempId, setTempId] = useState(undefined)
  const [tempTitle, setTempTitle] = useState(undefined)
  const [tempText, setTempText] = useState(undefined)

  function switchFunc () {
    setSwitcharoo(true)
  }

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
      return arr
    })
  }, [])

  function formThing () {
    return (
      <form onSubmit={addItem}>
        <input type='text' ref={titleRef} placeholder='Title' />
        <textarea ref={textRef} placeholder='Text' />
        <button type='submit'>Add</button>
      </form>
    )
  }

  function editItem (e) {
    const id = tempId
    e.preventDefault()
    const tempObj = Object.assign(cards)
    for (let i = 0; i < tempObj.length; i++) {
      if (tempObj[i].id === id) {
        tempObj[i].title = titleRef.current.value
        tempObj[i].text = textRef.current.value
      }
    }
    const newCard = update(cards, {
      $set: tempObj
    })
    setCards(newCard)
    setSwitchajing(false)
  }

  function editForm (id) {
    cards.forEach((item) => {
      if (item.id === id) {
        setTempTitle(item.title)
        setTempText(item.text)
      }
    })
    setTempId(id)
    setSwitchajing(true)
  }

  function form2 () {
    return (
      <form onSubmit={editItem}>
        <input type='text' ref={titleRef} defaultValue={tempTitle} />
        <textarea ref={textRef} defaultValue={tempText} />
        <button type='submit'>Change</button>
      </form>
    )
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
          id: Date.now()
        }]
      })
      setCards(newCard)
    }
    setSwitcharoo(false)
  }

  function deleteItem (key) {
    const filteredItems = cards.filter(card =>
      card.id !== key)
    setCards(filteredItems)
  }

  return (
    <section id='cards'>
      <h2>{props.title}</h2>
      <div id='cards-wrapper'>
        {cards.map((card) => {
          return (
            <div className='card' key={card.id}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <button onClick={() => editForm(card.id)}>Edit</button>
              <button style={{ float: 'right' }} onClick={() => deleteItem(card.id)}>X</button>
            </div>
          )
        })}
      </div>
      {!switcharoo && !switchajing && <button onClick={switchFunc}>+</button>}
      {switcharoo && formThing()}
      {switchajing && form2()}
    </section>
  )
}
