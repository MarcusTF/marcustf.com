import { render } from "@testing-library/react"

import DynamicNavigation from "./DynamicNavigation"

describe("DynamicNavigation Component", () => {
  it("renders DynamicNavigation component without crashing", () => {
    expect(() => render(<DynamicNavigation />)).not.toThrow()
  })
})
