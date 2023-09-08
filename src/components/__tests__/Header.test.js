const {render, screen, fireEvent} = require("@testing-library/react");
import {Provider} from "react-redux";
import store from "../../redux/store";
import Header from "../Header";
import {BrowserRouter} from "react-router-dom";
import "@testing-library/jest-dom"


it("should render header component with cart Item", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  
  const cartItem = screen.getByText("CART -");

  expect(cartItem).toBeInTheDocument()
});
test("should change sign in button to sign out on click", () => {
    render(
        <BrowserRouter>
        <Provider store={store}>
        <Header/>
        </Provider>
        </BrowserRouter>
    );
    const signBtn = screen.getByRole("button", {name: "SIGN IN"})
    fireEvent.click(signBtn)
    const signOutBtn = screen.getByRole("button", {name: "SIGN OUT"})
    expect(signOutBtn).toBeInTheDocument()
})