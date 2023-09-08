import { render, screen } from "@testing-library/react"
import ResturantCard from "../ResturantCard"
import RES_MOCK_DATA from "../../mocks/restaruantCardMochData.json"
import "@testing-library/jest-dom"


test("should render restaruant card component with props Data", () => {
    render(<ResturantCard resData={RES_MOCK_DATA}/>)
    const resName = screen.getByText("Brindhavan Vegetarian Restaurant")
    expect(resName).toBeInTheDocument()
})