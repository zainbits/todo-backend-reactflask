import {useState} from 'react'
import {encode} from "base-64"
import {TitleBar} from '../Components/RightTitleBar'
import {MagicSlate} from '../Components/MagicSlate'
import "bootstrap/dist/css/bootstrap.min.css";
import '../stylesheets/RightSide/TitleBar.css'
import '../stylesheets/RightSide/RightLogin.css'
import API from '../api'


export const LoginPage = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const handleLogin = async (event)=> {
      event.preventDefault()
      console.log(username,password)

      const opts = {
        headers: {
          "Authorization": "Basic " + encode(`${username}:${password}`)
        }
      }

      let response = await API.get("login", opts)
      console.log(response.data.token)
      localStorage.setItem("token", response.data.token)
    }

    return (
        
        <>
          <TitleBar title="Login" />
          <MagicSlate >
            <div class="card p-5 in2">
              <div class="card-body">
                <form onSubmit={handleLogin}>
                  <div class="form-group">
                    <h2>Login</h2>
                    <label for="username">Email address</label>
                    <input
                      type="text"
                      class="form-control"
                      id="username"
                      placeholder="Enter username"
                      value={username}
                      onChange={e => {setUsername(e.target.value)}}
                    />
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </div>
                  <div class="form-group form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="remember"
                    />
                    <label class="form-check-label" for="remember">
                      Remember me
                    </label>
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </MagicSlate>
        </>
    )
}