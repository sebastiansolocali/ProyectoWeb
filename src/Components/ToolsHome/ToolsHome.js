import React, { Component } from "react";
import { Rnd } from "react-rnd";

import "./ToolsHome.css";

class ToolsHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: {
        room1: {
          width: 200,
          height: 200,
          x: 10,
          y: 10
        }
      },
      sensors: {
        sensor1: {
          width: 50,
          height: 50,
          x: 10,
          y: 10
        }
      }
    };
  }

  UNSAFE_componentWillUpdate(prevProps, prevState, snapshot) {
    console.log(prevState);
  }

  render() {
    return (
      <div className="o-toolshome">
        <div className="o-layers">
          <button className="o-button">Save</button>
          <button className="o-button">Back</button>
        </div>
        <div className="o-design">
          <Rnd
            className="o-room"
            size={{
              width: this.state.rooms.room1.width,
              height: this.state.rooms.room1.height
            }}
            position={{
              x: this.state.rooms.room1.x,
              y: this.state.rooms.room1.y
            }}
            onDragStop={(e, d) => {
              this.setState({ rooms: { room1: { x: d.x, y: d.y } } });
            }}
            onResizeStop={(e, direction, ref, delta, position) => {
              this.setState({
                rooms: {
                  room1: {
                    width: ref.style.width,
                    height: ref.style.height,
                    ...position
                  }
                }
              });
            }}
          >
            <p>Cuarto1</p>
          </Rnd>
          <Rnd
            className="o-sensor"
            size={{
              width: this.state.sensors.sensor1.width,
              height: this.state.sensors.sensor1.height
            }}
            position={{
              x: this.state.sensors.sensor1.x,
              y: this.state.sensors.sensor1.y
            }}
            onDragStop={(e, d) => {
              this.setState({ sensors: { sensor1: { x: d.x, y: d.y } } });
            }}
          >
            <p>sensor1</p>
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
