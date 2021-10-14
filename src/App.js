import "./App.css";
import "./stylesheets/LeftSide/NavBar.css";
import { LoginPage } from "./Pages/Login";
import { AllUsers } from "./Pages/AllUsers";
import { Route, Switch, NavLink } from "react-router-dom";
import { Dashboard } from "./Pages/Dashboard";
import { TodoView } from "./Pages/TodoView";
import { About } from "./Pages/About";
import React from "react";

export const SimpleContext = React.createContext();
export const ClassContext = React.createContext();

function App() {
  let contextValue = "I am in App component";

  return (
    <>
      <div className="LeftPane">
        <div className="block__navbar">
          <ul>
            <NavLink activeClassName="custom" to="/">
              <li>Home</li>
            </NavLink>
            <NavLink activeClassName="custom" to="/about">
              <li>About</li>
            </NavLink>
          </ul>
        </div>
        <div className="block__navtitle">
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
            <Route exact path="/about">
              <ClassContext.Provider
                value={"Provider & Consumer ContextAPI example"}
              >
                <About />
              </ClassContext.Provider>
            </Route>
          </Switch>
        </SimpleContext.Provider>
      </div>
    </>
  );
}

export default App;
