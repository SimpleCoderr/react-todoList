import { useRef } from "react"
import { useEffect } from "react"
import { memo, useState } from "react"

const HeaderToDoList = memo(({setTasks}) => {
    let [text, setText] = useState('')
    const input = useRef()

    const changeText = (event) => {
        setText(event.currentTarget.value)
    }

    const addTask = () => {
        text ? setTasks(currentTasks => [...currentTasks, {value: text, checked: false}]) : alert('you must write something')
        setText('')
    }

    useEffect(() => {
        let listener = (event) => {
          if (event.code === 'Enter' || event.code === 'NumpadEnter') {
            addTask()
            event.preventDefault();
          }
        }
        document.addEventListener("keydown", listener);
        return () => {
          document.removeEventListener("keydown", listener);
        }
      }, [text])

      useEffect(() => {
        input.current.focus()
      }, [])

    return (
        <div className="header-wrapper">
        <div className="title">My To Do List</div>
        <div className="add-form">
            <input ref={input} className="add-form input" onChange={(e) => changeText(e)} placeholder="Title..." type="text" value={text} />
            <button className="add-form button" onClick={addTask}>Add</button>
        </div>
        </div>
    )
})

export default HeaderToDoList