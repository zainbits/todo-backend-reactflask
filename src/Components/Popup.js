import "../stylesheets/Popup.css";
import { useHistory } from "react-router-dom"

export const Popup = ({ trigger, setPop, children }) => {
    const history = useHistory()

    const Logout = () => {
        localStorage.removeItem("token")
        history.push("/")
    }

  return trigger ? (
    <div className="block__popup">
      {children}
      <div>
          <button className="btn btn-danger mx-2 no-cursor" onClick={Logout}>Logout</button>
          <button className="btn btn-primary mx-2 no-cursor"onClick={() => setPop(false)}>Close</button>
      </div>
    </div>
  ) : (
    ""
  );
};
