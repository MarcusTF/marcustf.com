import { Flipped } from "react-flip-toolkit"

import { PortfolioMenu } from "pages"
import { bemModifiers } from "utilities"

import { DynamicNavigationComponent } from "./DynamicNavigation.types"

import "./DynamicNavigation.scss"

const DynamicNavigation: DynamicNavigationComponent = ({ path: rawPath }) => {
  const isHome = rawPath === "home"

  const path = rawPath.split(" ")[0]

  switch (path) {
    case "portfolio":
      return (
        <Flipped flipId='dynamic-navigation' stagger>
          <nav className={bemModifiers("secondary-nav", path)} aria-hidden={isHome}>
            <PortfolioMenu />
          </nav>
        </Flipped>
      )
    default:
      return (
        <Flipped flipId='dynamic-navigation' stagger>
          <nav className={bemModifiers("secondary-nav", path)} aria-hidden={isHome} />
        </Flipped>
      )
  }
}

export default DynamicNavigation
