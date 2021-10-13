import "./App.css";
import { LoginPage } from "./Pages/Login";
import { AllUsers } from "./Pages/AllUsers";
import { Route, Switch } from "react-router-dom";
import { Dashboard } from "./Pages/Dashboard";
import { TodoView } from "./Pages/TodoView";
import React from "react";

export const SimpleContext = React.createContext("I am in App component");
console.log(SimpleContext);

function App() {
  let contextValue = "I am in App component";

  return (
    <>
      <div className="LeftPane">
        <div className="login-lp">
          <p>TODO - Web App{`\n`}Made in react</p>
        </div>
      </div>
      <div className="block--right">
        <SimpleContext.Provider value={contextValue}>
          <Switch>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <Route exact path="/getallusers">
              <AllUsers />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/todoone/:id">
              <TodoView />
            </Route>
          </Switch>
        </SimpleContext.Provider>
      </div>
    </>
  );
}

export default App;
