import React, {useState} from 'react'

export default function Todo() {
    const newList = [{
        content: "This is a sample todo",
        completed: false,
        priority: "low"
    }]
    const[list, setList] = useState(newList);
  return (
    <div>
      {list.map((item) => {
          return <div key={item}>{item}</div>;
      })}
    </div>
  )
}


