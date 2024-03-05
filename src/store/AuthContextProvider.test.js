import React from "react";
import fs from "fs";
import { render } from "@testing-library/react";
import AuthContextProvider from "./AuthContextProvider";

test("token is stored in localStorage, its value is get during initialization, and removed on logout", () => {
  const fileContent = fs.readFileSync(
    "./src/store/AuthContextProvider.js",
    "utf8"
  );

  expect(fileContent).toMatch(/localStorage\.setItem/g);
  expect(fileContent).toMatch(/localStorage\.removeItem/g);

  const getItemMock = jest.spyOn(Storage.prototype, "getItem");

  render(<AuthContextProvider />);

  expect(getItemMock).toHaveBeenCalledWith("token");

  getItemMock.mockRestore();
});
