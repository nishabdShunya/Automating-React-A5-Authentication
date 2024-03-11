import React from "react";
import fs from "fs";
import { render } from "@testing-library/react";
import AuthContextProvider from "./AuthContextProvider";

test("Implemented the auto-logout", () => {
  const fileContent = fs.readFileSync(
    "./src/store/AuthContextProvider.js",
    "utf8"
  );

  expect(fileContent).toMatch(/localStorage\.setItem/g);
  expect(fileContent).toMatch(/localStorage\.removeItem/g);
  expect(fileContent).toMatch(/setTimeout/g);
  expect(fileContent).toMatch(/clearTimeout/g);

  const getItemMock = jest.spyOn(Storage.prototype, "getItem");

  render(<AuthContextProvider />);

  expect(getItemMock).toHaveBeenCalledWith("token");

  getItemMock.mockRestore();
});
