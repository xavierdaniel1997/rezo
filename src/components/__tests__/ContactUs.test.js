import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import ContactUs from "../ContactUs";

describe("contact us test causes", () => {
    test("should load contact us component", () => {
        render(<ContactUs/>)
    
        // Querying
        const heading = screen.getByRole("heading")
    
        // Assertion
        expect(heading).toBeInTheDocument()
    })
    
    test("should have the button inside the component", () => {
        render(<ContactUs/>)
        const button = screen.getByText("Submit")
        expect(button).toBeInTheDocument()
    })
    test("should test all the input boxes", () => {
    
        render(<ContactUs/>)
    
        // Querying
        // When ever there is multiple elements there is All (getAllByRole) if you console.log it show's react.createElement => which is object we learn in first chapters
        const inputBoxes = screen.getAllByRole("textbox")
    
        // console.log(inputBoxes[0]);
    
        // Assertion
        expect(inputBoxes.length).toBe(2)
    })
})
