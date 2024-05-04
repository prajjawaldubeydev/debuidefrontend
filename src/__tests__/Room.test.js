import React from "react";
import Rooms from "../components/Rooms";
import { render } from "@testing-library/react";
import * as Apis from "../utils/Apis";

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
  jest.spyOn(Apis, "gettheRoomsData").mockResolvedValue(responseData);
});


it("should render Rooms ", () => {
  const { getByRole } = render(<Rooms />);
  const list = getByRole("list");
  expect(list).toBeDefined();
});

it("should have 3 rows", () => {
  const { getAllByRole } = render(<Rooms />);
  // const { getAllByRole } = within(list)
  const items = getAllByRole("listitem");
  expect(items.length).toBe(3);
});

it("should render Rooms available & Normal Room", () => {
  const { getByText, getByTestId } = render(<Rooms />);
  const roomsAvailable = getByText("Rooms Available");
  const rooms = [];

  rooms[0] = getByTestId("roomAv");
  rooms[1] = getByText(/ICU rooms/i);
  rooms[2] = getByTestId("roomAv-oxy");

  for (const room in rooms) {
    expect(room).toBeDefined();
  }

  expect(roomsAvailable).toBeDefined();
});
