import { render } from "@testing-library/react"

import SideBar from "./SideBar"

describe("SideBar Component", () => {
  it("renders SideBar component without crashing", () => {
    expect(() => render(<SideBar />)).not.toThrow()
  })
})
