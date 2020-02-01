import React, { useState, FormEvent } from 'react'

interface IProps {
  title: string
  text: string
  id: number
  deleteItem: Function
  editItem: Function
}

const Card: React.FC<IProps> = (props) => {
  const titleRef = React.createRef<HTMLInputElement>()
  const textRef = React.createRef<HTMLTextAreaElement>()

  const [title, setTitle] = useState(props.title)
  const [text, setText] = useState(props.text)

  const [isEdit, setEdit] = useState(false)

  function edit () {
    setEdit(true)
  }

  function submit (e: FormEvent) {
    e.preventDefault()
    if(titleRef.current && textRef.current) {
      setTitle(titleRef.current.value)
      setText(textRef.current.value)
    }
    props.editItem({id: props.id, title: title, text: text})
    setEdit(false)
  }

  function deleteItem () {
    props.deleteItem({id: props.id, title: title, text: text})
    //setRender(false)
  }

  return (
    <div className='card'>
      {isEdit &&
        <>
          <form id='edit-form' onSubmit={submit}>
            <input type='text' ref={titleRef} defaultValue={title} />
            <textarea ref={textRef} defaultValue={text} />
          </form>
          <button type='submit' form="edit-form">Change</button>
        </>}
      {!isEdit && <><h3>{title}</h3><p>{text}</p><button onClick={() => edit()}>Edit</button></>}
      <button style={{ float: 'right' }} onClick={() => deleteItem()}>X</button>
    </div>
  )
}

export default Card
