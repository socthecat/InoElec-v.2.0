import React, { useState } from 'react'

export default function Card (props) {
  const titleRef = React.createRef()
  const textRef = React.createRef()

  const [title, setTitle] = useState(props.title)
  const [text, setText] = useState(props.text)

  const [isEdit, setEdit] = useState(false)
  const [isRendered, setRender] = useState(true)

  function edit () {
    setEdit(true)
  }

  function submit (e) {
    e.preventDefault()
    setTitle(titleRef.current.value)
    setText(textRef.current.value)
    props.findAndReplace(props.id, title, text)
    setEdit(false)
  }

  function deleteItem () {
    setRender(false)
  }

  return (
    <>
      {isRendered &&
        <div className='card'>
          {isEdit &&
            <form onSubmit={submit}>
              <input type='text' ref={titleRef} defaultValue={title} />
              <textarea ref={textRef} defaultValue={text} />
              <button type='submit'>Change</button>
            </form>}
          {!isEdit && <><h3>{title}</h3><p>{text}</p><button onClick={() => edit()}>Edit</button></>}
          <button style={{ float: 'right' }} onClick={() => deleteItem()}>X</button>
        </div>}
    </>
  )
}
