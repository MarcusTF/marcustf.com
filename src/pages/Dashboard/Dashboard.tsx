import { animated, to, useSpring } from "@react-spring/web"
import { Flipped, Flipper } from "react-flip-toolkit"
import { Outlet, useLocation } from "react-router-dom"

import { DynamicNavigation, SideBar } from "components"
import { bemModifiers } from "utilities"

import { DashboardComponent } from "./Dashboard.types"

import "./Dashboard.scss"

const Dashboard: DashboardComponent = () => {
  const { pathname } = useLocation()
  const path = pathname.split(/\//g)[1] || "home"

  const isHome = path === "home"

  const { skewX } = useSpring({
    skewX: isHome ? 10 : 0,
    config: { mass: 1, tension: 200, damping: 30 },
  })

  return (
    <Flipper
      flipKey={pathname}
      className='dashboard'
      staggerConfig={{
        default: {
          speed: 0.1,
        },
      }}
      spring={{
        stiffness: 200,
        damping: 30,
      }}>
      <SideBar />
      <animated.div
        className={bemModifiers("content", path)}
        style={{ transform: to(skewX, skewX => `skewX(${skewX}deg)`) }}>
        <Flipped stagger flipId='decorative-stripe'>
          <div className={bemModifiers("decorative-stripe", path)} aria-hidden={isHome} />
        </Flipped>

        <DynamicNavigation path={path} />

        <Flipped stagger flipId='main'>
          <main className={bemModifiers("main", path)} aria-hidden={isHome}>
            <Outlet />
          </main>
        </Flipped>
      </animated.div>
    </Flipper>
  )
}

export default Dashboard
