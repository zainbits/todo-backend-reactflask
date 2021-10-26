import "../stylesheets/RightSide/TitleBar.css";
import { Popup } from "./Popup";
import { useState } from "react";
import { useHistory } from "react-router-dom"


export const TitleBar = ({ title }) => {
  const [pop, setPop] = useState(false);
  const history = useHistory()

  const Logout = () => {
    localStorage.removeItem("token")
    history.push("/")
}

  return (
    <div className="block__title">
      <div>{title}</div>
      <div className="block__title-buttons">
        <button onClick={()=>setPop(true)} className="button__logout no-cursor">
          Logout
        </button>
      </div>
      <Popup trigger={pop}>
        <div>
            <p>Do you really want to logout?</p>
            <button className="btn btn-danger mx-2 no-cursor" onClick={Logout}>Logout</button>
            <button className="btn btn-primary mx-2 no-cursor"onClick={() => setPop(false)}>Close</button>
        </div>
      </Popup>
    </div>
  );
};
