import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MainNavigation from "./MainNavigation";
import AuthContext from "../../store/auth-context";

test("Login link is shown when user is not logged in", () => {
  render(
    <BrowserRouter>
      <AuthContext.Provider value={{ isLoggedIn: false }}>
        <MainNavigation />
      </AuthContext.Provider>
    </BrowserRouter>
  );

  const loginLink = screen.getByText("Login");
  expect(loginLink).toBeInTheDocument();
});

test("Profile and Logout links are shown when user is logged in", () => {
  render(
    <BrowserRouter>
      <AuthContext.Provider value={{ isLoggedIn: true }}>
        <MainNavigation />
      </AuthContext.Provider>
    </BrowserRouter>
  );

  const profileLink = screen.getByText("Profile");
  const logoutButton = screen.getByText("Logout");

  expect(profileLink).toBeInTheDocument();
  expect(logoutButton).toBeInTheDocument();
});
