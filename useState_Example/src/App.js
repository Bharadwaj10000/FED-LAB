import { useState } from "react";
import "./styles.css";

export default function App() {
  const [items,setItems]=useState([])
  const [text,setText]=useState(' ')
  const addItem=()=>{
    setItems([
      ...items,text
    ])
    setText('')
  }

  return (
    <div className="App">
      <input value={text} 
      onChange={e=>setText(e.target.value)}/>
      <button onClick={addItem}>
        Add
      </button>
      <table>
        <tr>
          <th>Names</th>
        </tr>
        <tr>
          <td> 
            {items.map(item=>(
              <li>{item}</li>
            ))}
          </td>
        </tr>
      </table>
    </div>
  )
}
