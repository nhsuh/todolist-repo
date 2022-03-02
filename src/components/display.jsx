import React, {Component} from 'react';
import Box from '@material-ui/core/box';
import Todo from './todo';

class Display extends Component{
    state = {
        typing: false,
        adding: false,
        invalidInput: false, 
        newTask: "",
        tasks: []
    }
    newTaskHandler = () => {
        if(this.state.typing ===false)
            this.setState({ typing: true })
        else{

            this.setState({ typing: false })
            this.setState({ adding: true })
        }
    }
    addItem = (content) => {
        let copy = [...this.state.tasks]
        copy = [...copy, {
            id: this.state.tasks.length +1, 
            task: content, 
            complete: false
        }]
        this.setState({ tasks: copy })
    }
    handleTextBox = (ev) => {
        if(ev.key === "Enter")
        {
            ev.preventDefault();
            console.log(ev.target.value)
            if(ev.target.value === null)
            {
                this.setState({ invalidInput: true})
            }
            else{
                this.addItem(ev.target.value)
            }
        }
    }
    render(){
        const displayStyle = {
            padding: "20px",
            textAlign: "center",
            color: "#1c4863",
            backgroundColor: " #90cfdf"
        }
        const boxStyle = 
        {
            padding: "10px",
            fontSize: "20px",
            marginLeft:"150px",
            marginRight:"150px",
            textAlign: "center",
            cursor: "pointer"
        }
        const hoverHandler = e => {
            e.target.style.background = "pink"
        }
        const exitHandler = e =>{
            e.target.style.background = "#ffdbe7"
        }
        return (
        <div>              
            <h1 style = {displayStyle}>Nathan's ToDo List</h1> 
            <Box 
            color = "black" bgcolor = "#ffdbe7" style = {boxStyle} 
            onMouseEnter = {hoverHandler}
            onMouseLeave = {exitHandler}
            onClick = {this.newTaskHandler}>
            {this.state.typing ? 'Cancel' : 'New Task'}
            </Box>
            {this.state.invalidInput && <div>Please enter valid input</div>}
            {this.state.typing && <div>Task: <input type = "text" onKeyPress = {this.HandleTextBox}/></div>}
            {/*this.state.typing && <div>
                Priority: <input type = "text" onKeyPress = {this.handleTextBox}/>
                <br/>
                Press enter to add task
            </div>*/}
            {this.state.adding && this.addItem}
            {this.state.tasks.map(task => { 
                return (
                <div key={task}>
                {task}
                </div>
                )
       })}
        </div>
        )
    }
}

export default Display;



