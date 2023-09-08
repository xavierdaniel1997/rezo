import { sum } from "../sum"

test("testing the sum of two fractional numbers", () => {
    const result = sum(2, 3)
    
    expect(result).toBe(5)
})