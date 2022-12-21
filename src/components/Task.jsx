
const Task = ({text, checked, number, setTasks}) => {

    const removeTask = () => {
        console.log(number)
        setTasks(currentTasks => currentTasks.filter((item, num) => num !== number))
    }

    const checkedTaskToggle = (event) => {

        setTasks(currentTasks => currentTasks.map((el, num) => {
            if (num === number) {
                return {...el, checked: !checked}
            }
            return el
        }))
    }

    return (
        <>
        <div className={`task_wrapper ${checked ? 'checked-task_wrapper' : null}`}>
            <div onMouseDown={(e) => checkedTaskToggle(e)} className={`task ${checked ? 'checked-task' : null}`}>{text}</div>
            <button className="remove-btn" onMouseDown={removeTask}>×</button>
        </div>
        </>
    )
}

export default Task