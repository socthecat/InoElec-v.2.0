import React, { Component } from 'react'
import './Cards.scss'
import update from 'immutability-helper'

export default class Header extends Component {
  constructor (props) {
    super(props)
    this.rrefs = {
      titleRef: React.createRef(),
      textRef: React.createRef()
    }
    this.state = {
      cards:
        [
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
            text: 'Remember evr nme and can spell gud. When spell bad reread. never forget anything please trust',
            id: 3
          }
        ],
      switcharoo: false,
      switchajing: false,
      tempId: undefined,
      tempTitle: undefined,
      tempText: undefined
    }
  }

  switch = () => {
    this.setState({switcharoo: true})
  }

  formThing = () => {
    return (
      <form onSubmit={this.addItem}>
        <input type='text' ref={this.rrefs.titleRef} placeholder='Title' />
        <textarea ref={this.rrefs.textRef} placeholder='Text' />
        <button type='submit'>Add</button>
      </form>
    )
  }
  editItem = (e) => {
    const id = this.state.tempId
    e.preventDefault()
    let tempObj = Object.assign(this.state.cards)
    for(let i= 0; i < tempObj.length; i++) {
      if(tempObj[i].id === id) {
        tempObj[i].title = this.rrefs.titleRef.current.value
        tempObj[i].text = this.rrefs.textRef.current.value
      }
    }
    const newCard = update(this.state.cards, {
      $set: tempObj
    })
    this.setState({cards: newCard})
    this.setState({switchajing: false})
  }
  editForm = (id) => {
    this.state.cards.forEach((item) => {
      if(item.id === id) {
        this.setState({tempTitle: item.title})
        this.setState({tempText: item.text})
      }
    })
    this.setState({tempId: id})
    this.setState({switchajing: true})
  }
  form2 = () => {
    return(
      <form onSubmit={this.editItem}>
        <input type='text' ref={this.rrefs.titleRef} defaultValue={this.state.tempTitle}/>
        <textarea ref={this.rrefs.textRef} defaultValue={this.state.tempText}/>
        <button type='submit'>Change</button>
      </form>
    )
  }
  addItem = (e) => {
    e.preventDefault()
    const title = this.rrefs.titleRef.current.value
    const text = this.rrefs.textRef.current.value
    if(text !== '' && title !== ''){
      const newCard = update(this.state.cards, {
        $push: [{
          title: title,
          text: text,
          id: Date.now()
        }]
      })
      this.setState({cards: newCard})
    }
    this.setState({switcharoo: false})
  }

  deleteItem = (key) => {
    const filteredItems= this.state.cards.filter(card =>
      card.id!==key);
    this.setState({
      cards: filteredItems
    })
  }
  render () {
    return (
      <section id='cards'>
        <h2>{this.props.title}</h2>
        <div id='cards-wrapper'>
          {this.state.cards.map((card) => {
            return (
              <div className='card' key={card.id}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <button onClick={()=>this.editForm(card.id)}>Edit</button>
                <button onClick={()=>this.deleteItem(card.id)}>X</button>
              </div>
            )
          })}
        </div>
        {!this.state.switcharoo &&<button onClick={this.switch}>+</button>}
        {this.state.switcharoo && this.formThing()}
        {this.state.switchajing && this.form2()}
      </section>
    )
  }
}
