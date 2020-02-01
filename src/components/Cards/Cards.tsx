import React, { useState, useEffect, FormEvent } from 'react'
import './Cards.scss'
import Card from './Card/index'

interface IState {
  title: string
  text: string
  id: number
}

interface IProps {
  title: string
  fetchItems: Function
  addItem: Function
  cardState: IState[]
}

const Cards: React.FC<IProps> = (props) => {
  // refs
  const titleRef = React.createRef<HTMLInputElement>()
  const textRef = React.createRef<HTMLTextAreaElement>()
  // state
  const [cards, setCards] = useState(props.cardState)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    console.log('props: ', props)
    setCards(props.cardState)
  }, [props])

  function addItemForm () {
    return (
      <form className='FormikForm' onSubmit={addItem}>
        <input type='text' ref={titleRef} placeholder='Title' />
        <textarea ref={textRef} placeholder='Text' />
        <button type='submit'>Add</button>
      </form>
    )
  }

  function addItem (e: FormEvent) {
    e.preventDefault()
    if(titleRef.current && textRef.current){
        props.addItem({
          title: titleRef.current.value,
          text: textRef.current.value,
          id: Date.now()
        })
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
