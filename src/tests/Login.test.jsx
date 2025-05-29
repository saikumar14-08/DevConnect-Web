import { render, screen } from "@testing-library/react";
import Login from "../components/Login";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "../utils/appStore";
import React from "react"; 

const renderWithProviders = (ui) => {
  return render(
    <Provider store={store}>
      <BrowserRouter>{ui}</BrowserRouter>
    </Provider>
  );
};

describe("Login Component", () => {
  test("renders email and password input", () => {
    renderWithProviders(<Login />);
    expect(screen.getByPlaceholderText(/mail@site.com/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });
});
