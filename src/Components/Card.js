import "../stylesheets/Card.css";
import {SimpleContext} from "../App";
import { useContext } from "react";

export const Card = ({ children }) => {
  const val = useContext(SimpleContext);

  console.log(val);
  return (
    <div className="block__card">
      {children}
      <p>{val}</p>
    </div>
  );
};
