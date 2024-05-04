
import axios from "axios";
export async function gettheResoucesData() {
  
  
  try {
    const response = await axios.get(
      process.env.REACT_APP_BACKEND_URL + "resources",
      {
        params: {},
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(response.data)
    return response.data;
  } catch (er) {
    console.log(er);
  }
}

export async function gettheRoomsData() {

    try {
      const response = await axios.get(
        process.env.REACT_APP_BACKEND_URL + "resources/room",
        {
          params: {},
          headers: { "Content-Type": "application/json" },
        }
      );
      return response.data;
    } catch (er) {
      console.log(er);
    }
  }


