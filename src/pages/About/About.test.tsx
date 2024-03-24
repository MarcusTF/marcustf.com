import { render } from "@testing-library/react"

import About from "./About"

describe("About Component", () => {
  it("renders About component without crashing", () => {
    expect(() => render(<About />)).not.toThrow()
  })
})
