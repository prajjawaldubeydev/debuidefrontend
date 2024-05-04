import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Resources from "./Resources.jsx";
import Rooms from "./Rooms.jsx";
const HomePage = () => {
  const [curRoom, setCurRoom] = useState("Select a Room");

  const handleSelect = (eventKey) => {
    setCurRoom(eventKey.target.value);
  };

  const onsubmit = () => {
    console.log("i am running");
  };

  return (
    <div className="container">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Rooms />
          </div>
          <div className="col-md-6">
            <Resources />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <select
              name="rooms"
              className="form-select"
              data-testid="dropdown"
              onChange={handleSelect}
              value={curRoom}
            >
              <option value="Normal Room">Normal Room</option>
              <option value="ICU Room">ICU Room</option>
              <option value="Oxygen Room">Oxygen Room</option>
            </select>
            <br />
            <Button variant="primary" onClick={onsubmit}>
              Book
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
