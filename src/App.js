import "./App.css";
import { LoginPage } from "./Pages/Login";
import { AllUsers } from "./Pages/AllUsers";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div class="overflow-hidden">
      <div class="row">
        <div class="col-md-4 LeftPane">
          <div class="login-lp">
            <p>TODO - Web App{`\n`}Made in react</p>
          </div>
        </div>
          <Switch>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <Route path="/getallusers">
              <AllUsers />
            </Route>
          </Switch>
      </div>
    </div>
  );
}

export default App;
