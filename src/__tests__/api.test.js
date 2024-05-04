import { gettheResoucesData ,gettheRoomsData} from "../utils/Apis.js";

import axios from "axios";

describe("gettheResoucesData", () => {
  it("fetches resources data successfully", async () => {
    const responseData = {
      message: "Resources retrieved",
      resources: {
        _id: "66294e42a9e44c557669c37f",
        FlatBed: 80,
        ReclinerBed: 4,
        Ventilator: 4,
        OxygenCylinder: 4,
        NormalMask: 200,
        NonRebreatherMask: 120,
      },
    };
    jest.spyOn(axios, 'get').mockResolvedValue({ data: responseData })
    const resourcesData = await gettheResoucesData();
    expect(resourcesData).not.toBeNull()
    expect(resourcesData).toEqual(responseData);

    expect(axios.get).toHaveBeenCalledWith(
      process.env.REACT_APP_BACKEND_URL + "resources",
      {
        params: {},
        headers: { "Content-Type": "application/json" },
      }
    );
  });

  it("fetches rooms data successfully", async () => {
    const responseData = {
      message: "Rooms retrieved",
      rooms: [
        {
          _id: "6635fc56727b4023e66a876d",
          NormalRoom: 50,
          OxygenRoom: 50,
          ICU: 20
        }
      ]
    };
    jest.spyOn(axios, 'get').mockResolvedValue({ data: responseData })


  
    const resourcesData = await gettheRoomsData();

    expect(resourcesData).toEqual(responseData);

    expect(axios.get).toHaveBeenCalledWith(
      process.env.REACT_APP_BACKEND_URL + "resources/room",
      {
        params: {},
        headers: { "Content-Type": "application/json" },
      }
    );
  });
});
