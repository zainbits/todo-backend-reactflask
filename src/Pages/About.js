
import {TitleBar} from "../Components/RightTitleBar"
import {MagicSlate} from '../Components/MagicSlate';
import React from "react";
import { ClassContext } from "../App";

export class About extends React.Component {
  render() {
    return (
      <>
        <TitleBar title="About" />
          <MagicSlate>
              <ClassContext.Consumer> 
                {(fname) => {
                  return <h1 className="block__slate" style={{color:"var(--accent)", fontSize: 50}}>{fname}</h1>;
                }}
              </ClassContext.Consumer>
          </MagicSlate>
      </>
    );
  }
}

const FunctionAbout = () => {
  return <div>hi there</div>;
};
