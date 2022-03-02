import React, {useState} from 'react'
import Box from '@material-ui/core/box';

export default function App() {
    const [addingTask, setAddingTask] = useState(false);
    const [userInput, setUserInput] = useState("");
    const [tasks, setTasks] = useState([]);
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
    const handleChange = (e) =>{
        setUserInput(e.currentTarget.value)
    }
    const addTask = (userInput) => {
        let copy = [...tasks];
        copy = [...copy, { id: tasks.length + 1, task: userInput, complete: false }];
        setTasks(copy);
      }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
        setAddingTask(false)
    }
    const clearAll = () =>{
        setTasks([])
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
            Task: <input value = {userInput} type = "text" onChange = {handleChange}/>
            <br/>
            Category: <input type = "text"></input>
            <br/>
            <Box 
                color = "black" bgcolor = "#ffdbe7" style = {boxStyle}
                onMouseEnter = {hoverHandler}
                onMouseLeave = {exitHandler}
                onClick = {handleSubmit}>
                Add Task
            </Box>
        </div>}
        {tasks.map((item) => {
       return <div><h3><input type = "checkbox"/>{item.task}</h3></div>;
     })}
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
