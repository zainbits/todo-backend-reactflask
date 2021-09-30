import "../App.css";
import {useEffect, useState} from 'react'

const AllUsers = ()=> {
    const token = sessionStorage.getItem('token')
    const [data, setData] = useState([])

    useEffect(()=>{
        const opts = {
            method: "GET",
            headers: {
                "Authorization": token
            }
        }
        fetch('/user', opts)
        .then(res => res.json())
        .then(data=>{
            setData(data)
            console.log(data)
        })
        .catch(console.error)
    }, [])
    

    
    return (
        <div class="darkback">
            <h1>Hi There</h1>
            {data.length !== 0 && data.map(item=>{
                return (
                    <div key={item.id}>
                        <h1>{item.id}</h1>
                        <h1>{item.name}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export {AllUsers}