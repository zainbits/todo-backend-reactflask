import {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";


export const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const handleLogin = (event)=> {
      event.preventDefault()
      console.log(email,password)
    }

    return (
        
        <div class="col-md-8 RightPane">
          <div class="RightInner in1">
            <nav></nav>
          </div>
          <div class="RightInner in2">
            <div class="card p-5">
              <div class="card-body">
                <form onSubmit={handleLogin}>
                  <div class="form-group">
                    <h2>Login</h2>
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      value={email}
                      onChange={e => {setEmail(e.target.value)}}
                    />
                    <small id="emailHelp" class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </div>
                  <div class="form-group form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1">
                      Remember me
                    </label>
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
    )
}