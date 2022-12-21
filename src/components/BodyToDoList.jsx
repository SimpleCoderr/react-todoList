import { useRef } from "react"
import Task from "./Task"

const BodyToDoList = ({ tasks, setTasks }) => {

    const taskComponents = tasks.map((el, num) => <Task text={el.value} checked={el.checked} key={num} number={num} setTasks={setTasks} />)

    const sumCompleteTask = tasks.reduce((accum, curValue) => {
        if (curValue.checked) {
            return +accum + 1
        }
        return accum
    }, null)

    const percentComplete = sumCompleteTask / tasks.length * 100 + '%'

    const promotionLine =
        <div className="promotion-line">
            <div style={{ width: percentComplete }} className={`promotion-line_nested ${percentComplete === '100%' ? 'row__red' : null}`}></div>
        </div>

    return (
        <div className="body-wrapper">
            {taskComponents.length ? taskComponents : 'add your first task!'}
            {taskComponents.length ? promotionLine : null}
            <div className="complete-tasks-statistic">
                {sumCompleteTask && `Well done! You have already completed ${sumCompleteTask === tasks.length ? 'all' : sumCompleteTask} task(s)`}
            </div>
        </div>
    )
}

export default BodyToDoList;