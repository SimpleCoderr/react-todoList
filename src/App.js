import logo from './logo.svg';
import './App.css';
import HeaderToDoList from './components/HeaderToDoList';
import BodyToDoList from './components/BodyToDoList';
import { useCallback, useEffect, useState } from 'react';

function App() {

  let [tasks, setTasks] = useState([
    { value: 'walk with dog', checked: false },
    { value: 'read the book about life famous people', checked: true },
    { value: 'play the basketball', checked: false }
  ])

  setTasks = useCallback(setTasks, []) // чтобы не происходила перерисовка компоненты HeaderToDoList, когда в BodyToDoList меняется state tasks

  return (
    <div className='container'>
      <HeaderToDoList setTasks={setTasks} />
      <BodyToDoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
