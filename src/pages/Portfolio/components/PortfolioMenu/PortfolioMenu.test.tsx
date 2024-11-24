import { render } from "@testing-library/react"

import PortfolioMenu from "./PortfolioMenu"

describe("PortfolioMenu Component", () => {
  it("renders PortfolioMenu component without crashing", () => {
    expect(() => render(<PortfolioMenu />)).not.toThrow()
  })
})
