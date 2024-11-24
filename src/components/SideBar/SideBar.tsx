import { Link, useLocation } from "react-router-dom"

import { SideBarComponent } from "./SideBar.types"

import "./SideBar.scss"

const HomeLink = () => {
  const isHome = useLocation().pathname === "/"
  if (!isHome)
    return (
      <li>
        <Link to='/'>Home</Link>
      </li>
    )
}

const SideBar: SideBarComponent = () => {
  return (
    <header className='sidebar'>
      <h1>Marcus Fernandez</h1>
      <h2>
        <span>Frontend Engineer</span>
        <span>Graphic Designer</span>
        <span>Nerd</span>
      </h2>
      <nav className='navigation'>
        <ul className='navigation__menu'>
          <ul className='navigation__sub-menu navigation__sub-menu--social'>
            <li>
              <a href='https://github.com/marcustf' target='_blank'>
                Github
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/marcustfernandez' target='_blank'>
                Linkedin
              </a>
            </li>
          </ul>
          <ul className='navigation__sub-menu navigation__sub-menu--main'>
            <HomeLink />
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/portfolio'>Portfolio</Link>
            </li>
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
          </ul>
        </ul>
      </nav>
    </header>
  )
}

export default SideBar
