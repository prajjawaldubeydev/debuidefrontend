import { render, fireEvent, act} from "@testing-library/react";
import React  from "react";
import * as Apis from "../utils/Apis";
import HomePage from "../components/HomePage";

beforeAll(() => {
  // Perform actions before running tests
  console.log("Setting up...");
  const responseData = {
    message: "Rooms retrieved",
    rooms: [
      {
        _id: "6635fc56727b4023e66a876d",
        NormalRoom: 50,
        OxygenRoom: 50,
        ICU: 20,
      },
    ],
  };
  const resourseData = {
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
  jest.spyOn(Apis, "gettheRoomsData").mockResolvedValue(responseData);
  jest.spyOn(Apis, "gettheResoucesData").mockResolvedValue(resourseData);
});

it(" should render dropdown of rooms as option ", () => {
  // Render the component

  const { getByTestId, getByText } = render(<HomePage />);

  const dropdown = getByTestId("dropdown");

  fireEvent.click(dropdown);

  // Select 'Normal Room' option

  // Assert that 'Normal Room' is selected

  expect(dropdown.textContent).toContain("Normal Room");
  expect(dropdown.textContent).toContain("ICU Room");
  expect(dropdown.textContent).toContain("Oxygen Room");

  //Select 'ICU Room' option
});
it("should update room after click", () => {
  const { getByTestId, getByText } = render(<HomePage />);
  const dropdown = getByTestId("dropdown");
  act(() => {
    fireEvent.click(dropdown);

    fireEvent.click(getByText("Normal Room"));
  });

  // Assert that 'Normal Room' is selected

  expect(dropdown.textContent).toContain("Normal Room");
});
