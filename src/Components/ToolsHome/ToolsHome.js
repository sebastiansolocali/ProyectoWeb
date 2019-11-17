import React, { Component } from "react";
import { Rnd } from "react-rnd";

import "./ToolsHome.css";

class ToolsHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 200,
      height: 200,
      x: 10,
      y: 10
    };
  }

  UNSAFE_componentWillUpdate(prevProps, prevState, snapshot){
      console.log(prevState)
  }

  render() {
    return (
      <div className="o-toolshome">
        <div className="o-layers">
          <button className="o-button">Save</button>
          <button className="o-button">Back</button>
        </div>
        <div className="o-design">
            {console.log(this.state)}
          <Rnd
            className="o-room"
            size={{ width: this.state.width, height: this.state.height }}
            position={{ x: this.state.x, y: this.state.y }}
            onDragStop={(e, d) => {
              this.setState({ x: d.x, y: d.y });
            }}
            onResizeStop={(e, direction, ref, delta, position) => {
              this.setState({
                width: ref.style.width,
                height: ref.style.height,
                ...position
              });
            }}
          >
            <p>Cuarto1</p>
          </Rnd>
        </div>
        <div className="o-details">
          <div>design</div>
          <div>background</div>
        </div>
      </div>
    );
  }
}

export default ToolsHome;
