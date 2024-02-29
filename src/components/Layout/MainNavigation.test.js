import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MainNavigation from "./MainNavigation";
import AuthContext from "../../store/auth-context";

test("User is logged out on clicking the Logout button", () => {
  const mockLogout = jest.fn();

  render(
    <BrowserRouter>
      <AuthContext.Provider value={{ isLoggedIn: true, logout: mockLogout }}>
        <MainNavigation />
      </AuthContext.Provider>
    </BrowserRouter>
  );

  // Click on the logout button
  fireEvent.click(screen.getByText("Logout"));

  expect(window.location.pathname).toBe("/auth");
});
