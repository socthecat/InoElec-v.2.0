import React, { useState, FormEvent } from 'react'

interface IProps {
  title: string
  text: string
  id: number
  findAndReplace(id: number, title: string, text: string): void
}

const Card: React.FC<IProps> = (props) => {
  const titleRef = React.createRef<HTMLInputElement>()
  const textRef = React.createRef<HTMLTextAreaElement>()

  const [title, setTitle] = useState(props.title)
  const [text, setText] = useState(props.text)

  const [isEdit, setEdit] = useState(false)
  const [isRendered, setRender] = useState(true)

  function edit () {
    setEdit(true)
  }

  function submit (e: FormEvent) {
    e.preventDefault()
    if(titleRef.current && textRef.current) {
      setTitle(titleRef.current.value)
      setText(textRef.current.value)
    }
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

export default Card
