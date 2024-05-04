import React, { useState, useEffect } from "react";
import { gettheRoomsData } from "../utils/Apis.js";



const Rooms = () => {
  const [normal, setNormal] = useState(0);
  const [icu, setIcu] = useState(0);
  const [oxygen, setOxygen] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const resources = await gettheRoomsData();
      console.log(resources);
      const resourcesData = resources["rooms"][0];
      // console.log(resourcesData)
      setNormal(resourcesData.NormalRoom);
      setIcu(resourcesData.ICU);
      setOxygen(resourcesData.OxygenRoom);
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>Rooms Available</h1>
      <ul className="list-group" aria-labelledby="rooms">
        <li className="list-group-item" data-testid="roomAv">
          Normal Rooms :{normal}
        </li>
        <li className="list-group-item" data-testid="roomAv-icu">ICU rooms :{icu}</li>
        <li className="list-group-item" data-testid="roomAv-oxy">Oxygen Rooms: {oxygen}</li>
      </ul>
    </>
  );
};
export default Rooms;
