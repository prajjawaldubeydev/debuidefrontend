import React, { useEffect, useState } from "react";
import { gettheResoucesData } from "../utils/Apis.js";

const Resources = () => {
  const [res, setRes] = useState({
    "Flat Bed": 0,
    "Recliner Bed": 0,
    Ventilator: 0,
    "Oxygen Cylinder": 0,
    "Normal Mask": 0,
    "Non rebreather mask": 0,
  });
  useEffect(() => {
    const fetchData = async () => {
      const resorces = await gettheResoucesData();
      console.log(resorces["resources"]);
      const resourcesData = resorces["resources"];
      setRes({
        "Flat Bed": resourcesData.FlatBed,
        "Recliner Bed": resourcesData.ReclinerBed,
        "Ventilator": resourcesData.Ventilator,
        "Oxygen Cylinder": resourcesData.OxygenCylinder,
        "Normal Mask": resourcesData.NormalMask,
        "Non rebreather mask": resourcesData.NonRebreatherMask,
      });
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="container">
        <h1>Resourse Available</h1>
        <ul className="list-group">
          <li className="list-group-item">Flat Bed :{res["Flat Bed"]}</li>
          <li className="list-group-item">
            Recliner Bed: {res["Recliner Bed"]}
          </li>
          <li className="list-group-item">Ventilator :{res["Ventilator"]}</li>
          <li className="list-group-item">
            Oxygen Cylinder : {res["Oxygen Cylinder"]}
          </li>
          <li className="list-group-item">
            Normal Mask : {res["Normal Mask"]}
          </li>
          <li className="list-group-item">
            Non rebreather mask :{res["Non rebreather mask"]}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resources;
