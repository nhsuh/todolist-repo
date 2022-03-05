import React, {useState, useEffect} from 'react'
import Box from '@material-ui/core/box';
import TodoList from './todoList'

const LOCAL_STORAGE_KEY = 'todoApp.tasks'

export default function App() {
    const [addingTask, setAddingTask] = useState(false);
    const [userInput, setUserInput] = useState("");
    const [priority, setPriority] = useState();
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if(storedTasks) setTasks(storedTasks)
    }, [])
    useEffect (() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
    }, [tasks])

    function toggleTodo(id) {
        const newTasks = [...tasks]
        const task = newTasks.find(task => task.key === id)
        task.complete = !task.complete
        setTasks(newTasks)
    }
    
    const displayStyle = {
        padding: "20px",
        textAlign: "center",
        color: "#1c4863",
        backgroundColor: " #90cfdf"
    }
    const boxStyle = {
        padding: "10px",
        fontSize: "20px",
        marginLeft:"150px",
        marginRight:"150px",
        textAlign: "center",
        cursor: "pointer"
    }
    const boxStyle2 = {
        padding: "10px",
        fontSize: "20px",
        marginLeft:"150px",
        marginRight:"150px",
        marginTop: "20px",
        textAlign: "center",
        cursor: "pointer"
    }
    const hoverHandler = e => {
        e.target.style.background = "pink"
    }
    const exitHandler = e =>{
        e.target.style.background = "#ffdbe7"
    }
    const newTaskHandler = () => {
        if(addingTask ===false)
            setAddingTask(true)
        else
            setAddingTask(false)
    }
    const handleChangeTask = (e) =>{
        setUserInput(e.currentTarget.value)
    }
    const handleChangePriority = (e) => {
        setPriority(e.currentTarget.value)
    }
    const addTask = (userInput, priority) => {
        let copy = [...tasks];
        if(userInput === '') return null
        copy = [...copy, { key: tasks.length + 1, task: userInput, priority: parseInt(priority) ,complete: false }];
        copy.sort((function(a, b){return a.priority - b.priority}) )
        setTasks(copy);
      }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput, priority);
        setUserInput("");
        setAddingTask(false)
        setPriority("");
    }
    const clearAll = () =>{
        setTasks([])
    }
    const clearCompleted = () => {
        const newTodos = tasks.filter(task => !task.complete)
        setTasks(newTodos)
    }
  return (
    <div>
        <h1 style={displayStyle}>Nathan's ToDo List</h1> 
        <Box 
            color = "black" bgcolor = "#ffdbe7" style = {boxStyle}
            onMouseEnter = {hoverHandler}
            onMouseLeave = {exitHandler}
            onClick = {newTaskHandler}>
            {addingTask ? 'Cancel' : 'New Task'}
        </Box>
        {addingTask && <div>
            Task: <input value = {userInput} type = "text" onChange = {handleChangeTask}/>
            <br/>
            Priority: <input value = {priority} type = "text" onChange = {handleChangePriority}></input>
            <br/>
            <Box 
                color = "black" bgcolor = "#ffdbe7" style = {boxStyle}
                onMouseEnter = {hoverHandler}
                onMouseLeave = {exitHandler}
                onClick = {handleSubmit}>
                Add Task
            </Box>
        </div>}
        <TodoList todos = {tasks} toggleTodo = {toggleTodo}/>
        {/*{tasks.map((item) => {
       return <div><h3><input type = "checkbox"/>{item.task}</h3></div>;
     })}*/}
        <Box 
            color = "black" bgcolor = "#ffdbe7" style = {boxStyle}
            onMouseEnter = {hoverHandler}
            onMouseLeave = {exitHandler}
            onClick = {clearCompleted}>
            Clear Completed
        </Box>
        <Box
            color = "black" bgcolor = "#ffdbe7" style = {boxStyle2}
            onMouseEnter = {hoverHandler}
            onMouseLeave = {exitHandler}
            onClick = {clearAll}>
            Clear All
        </Box>
    </div>
  )
}
