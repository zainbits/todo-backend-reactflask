import {useState} from 'react'
import {encode} from "base-64"
import {TitleBar} from '../Components/RightTitleBar'
import {MagicSlate} from '../Components/MagicSlate'
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../stylesheets/RightSide/TitleBar.css'
import '../stylesheets/RightSide/RightLogin.css'
import API from '../api'


export const LoginPage = () => {

    let history = useHistory()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loginError, setLoginError] = useState(null)
    
    const handleLogin = async (event)=> {
      event.preventDefault()
      console.log(username,password)

      const opts = {
        headers: {
          "Authorization": "Basic " + encode(`${username}:${password}`)
        }
      }

      try {
        let response = await API.get("login", opts)
        console.log(response.data)
        localStorage.setItem("token", response.data.token)
        history.push('/dashboard')
      }
      catch (err) {
        if (err.response.status === 401){
            setLoginError('Invalid Username or Password')
        }
      }
    }

    return (
        
        <>
          <TitleBar title="Login" />
          <MagicSlate className="block__slate">
            <div className="card p-5 in2">
              <div className="card-body">
                <form onSubmit={handleLogin}>
                  <div className="form-group">
                    <h2>Login</h2>
                    <label htmlFor="username">Email address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Enter username"
                      value={username}
                      onChange={e => {setUsername(e.target.value)}}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="remember"
                    />
                    <label className="form-check-label" htmlFor="remember">
                      Remember me
                    </label>
                  </div>
                  <div style={{color: '#DF362D'}}>{loginError}</div>
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </MagicSlate>
        </>
    )
}