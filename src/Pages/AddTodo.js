import API from "../api";
import { useState } from "react"

const token = localStorage.getItem("token");

export const AddTodoPage = ({setPop, reload}) => {

    const [text, setText] = useState("")

    const opts = {
        headers: {
          Authorization: "Bearer " + token,
        }
      };
    const addTodoAPI = () => {
        API.post('/todo',{text: text} , opts).catch(err => {console.log(err)})
        setPop(false)
        reload()
    }

    return (
        <div>
            ​<textarea id="txtArea" rows="10" cols="70" maxlength="50" onChange={e=>setText(e.target.value)}></textarea>
           <div>
                <button onClick={addTodoAPI}>Add</button>
                <button onClick={()=>setPop(false)}>close</button>
           </div>
        </div>
    )
}