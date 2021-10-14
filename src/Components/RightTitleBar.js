import "../stylesheets/RightSide/TitleBar.css";
import { Popup } from "./Popup";
import { useState } from "react";

export const TitleBar = ({ title }) => {
  const [pop, setPop] = useState(false);

  const popTrigger = () => {
    setPop(true);
    console.log("clicked");
  };

  return (
    <div className="block__title">
      <div>{title}</div>
      <div className="block__title-buttons">
        <button onClick={popTrigger} className="button__logout">
          Logout
        </button>
      </div>
      <Popup trigger={pop} setPop={setPop}>
          <p>Do you really want to logout?</p>
      </Popup>
    </div>
  );
};
