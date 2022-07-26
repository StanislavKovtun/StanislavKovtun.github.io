import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/redux-store";
import { Provider } from "react-redux";

let JestApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};

test("renders learn react link", () => {
  render(<JestApp />);
  //   const linkElement = screen.getByText(/Jest test/i);
  const linkElement = screen.getByText("Jest test");
  expect(linkElement).toBeInTheDocument();
});
