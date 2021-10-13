import {TitleBar} from '../Components/RightTitleBar'
import {MagicSlate} from '../Components/MagicSlate'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import API from '../api'

export const TodoView = (props) => {
    const {id} = useParams()
    const [text, setText] = useState("")
    const token = localStorage.getItem("token");

    const opts = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
    
    useEffect(()=>{
        API.get(`/todo/${id}`, opts).then(todo => {setText(todo.data.todo.text)})
    })

    return (
        <>
            <TitleBar title="Todo"/>
            <MagicSlate className="block__slate">
                <div>{text}</div>
            </MagicSlate>
        </>
    )
}