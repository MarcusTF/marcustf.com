import { Link, Outlet, useLocation } from "react-router-dom"
import { useAutoAnimate } from "@formkit/auto-animate/react"

import { bemModifiers } from "utilities"

import { DashboardComponent } from "./Dashboard.types"

import "./Dashboard.scss"

const HomeLink = ({ isHome }: { isHome: boolean }) => {
  if (!isHome)
    return (
      <li>
        <Link to='/'>Home</Link>
      </li>
    )
}

const Dashboard: DashboardComponent = () => {
  const path = useLocation().pathname.replace("/", "") || "home"
  const [animationParent] = useAutoAnimate({
    duration: 250,
  })

  const isHome = path === "home"

  return (
    <div className='dashboard'>
      <header className='sidebar'>
        <h1>Marcus Fernandez</h1>
        <h2>
          <span>Frontend Engineer</span> <br />
          <span>Graphic Designer</span> <br />
          <span>Nerd</span>
        </h2>
        <nav className='navigation'>
          <ul className='navigation__menu' ref={animationParent}>
            <ul className='navigation__sub-menu navigation__sub-menu--social' ref={animationParent}>
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
            <ul className='navigation__sub-menu navigation__sub-menu--main' ref={animationParent}>
              <HomeLink isHome={isHome} />
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
      <div className={bemModifiers("content", path)}>
        <div className={bemModifiers("decorative-stripe", path)} aria-hidden={isHome} />
        <nav className={bemModifiers("secondary-nav", path)} aria-hidden={isHome}></nav>
        <main className={bemModifiers("main", path)} aria-hidden={isHome} ref={animationParent}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Dashboard
