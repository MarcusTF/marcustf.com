import { render } from "@testing-library/react"

import Portfolio from "./Portfolio"

describe("Portfolio Component", () => {
  it("renders Portfolio component without crashing", () => {
    expect(() => render(<Portfolio />)).not.toThrow()
  })
})
