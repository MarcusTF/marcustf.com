import { Link } from "react-router-dom"

import { PortfolioMenuComponent } from "./PortfolioMenu.types"

import "./PortfolioMenu.scss"

const PortfolioMenu: PortfolioMenuComponent = () => {
  return (
    <div className='portfolio-menu'>
      <Link to='/portfolio'>Base</Link>
      <Link to='/portfolio/design'>Design</Link>
      <Link to='/portfolio/development'>Development</Link>
      <Link to='/portfolio/management'>Management</Link>
    </div>
  )
}

export default PortfolioMenu
