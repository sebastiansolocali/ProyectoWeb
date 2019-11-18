import React, { Component } from "react";
import { Rnd } from "react-rnd";

import "./ToolsHome.css";

class ToolsHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: {
        // room: {
        //   id: 1,
        //   width: 200,
        //   height: 200,
        //   x: 10,
        //   y: 10
        // }
      },
      sensors: {
        // sensor: {
        //   id: 1,
        //   width: 40,
        //   height: 40,
        //   x: 10,
        //   y: 10
        // }
      }
    };
  }

  UNSAFE_componentWillMount() {

    // console.log(prevState);
  }

  UNSAFE_componentWillUpdate(prevProps, prevState, snapshot) {
    // console.log(prevState);
  }

  addRoom() {

  }

  addSensor() {

  }

  render() {
    return (
      <div className="o-toolshome">
        <div className="o-layers">
          <button className="o-button">Save</button>
          <button className="o-button">Back</button>
        </div>
        <div className="o-design">
          {Object.values(this.state.rooms).map((room, index) => {
            return (
              <div key={index}>
                <Rnd
                  className="o-room"
                  size={{
                    width: room.width,
                    height: room.height
                  }}
                  position={{
                    x: room.x,
                    y: room.y
                  }}
                  onDragStop={(e, d) => {
                    this.setState({
                      rooms: {
                        index: {
                          id: index + 1,
                          width: room.width,
                          height: room.height,
                          x: d.x,
                          y: d.y
                        }
                      }
                    });
                  }}
                  onResizeStop={(e, direction, ref, delta, position) => {
                    this.setState({
                      rooms: {
                        index: {
                          id: index + 1,
                          width: ref.style.width,
                          height: ref.style.height,
                          ...position
                        }
                      }
                    });
                  }}
                >
                  <p>Cuarto</p>
                </Rnd>
              </div>
            );
          })}
          
          {Object.values(this.state.sensors).map((sensor, index) => {
            return (
              <div key={index}>
                <Rnd
                  className="o-sensor"
                  size={{
                    width: sensor.width,
                    height: sensor.height
                  }}
                  position={{
                    x: sensor.x,
                    y: sensor.y
                  }}
                  onDragStop={(e, d) => {
                    this.setState({
                      sensors: {
                        index: {
                          id: index + 1,
                          width: sensor.width,
                          height: sensor.height,
                          x: d.x,
                          y: d.y
                        }
                      }
                    });
                  }}
                >
                  <p>sensor1</p>
                </Rnd>
              </div>
            );
          })}
        </div>
        <div className="o-details">
          <button onClick={this.addRoom()} className="o-button">Add Room</button>
          <button onClick={this.addSensor()} className="o-button">Add Sensor</button>
        </div>
      </div>
    );
  }
}

export default ToolsHome;
