import { useContext } from "react"
import { Route, Routes, useLocation } from "react-router-dom"

import { Context } from "context"
import { About, Dashboard, Portfolio } from "pages"

import "./App.scss"

function App() {
  console.log(useLocation().pathname)
  console.log(useContext(Context)?.state?.user?.isLoggedIn)
  return (
    <Routes>
      {/* Invert the logic so that the user can't access the login page if they are already logged in */}
      {/* <Route element={<PrivateRoute invert />} path='/'>
        <Route element={<Login />} path='/login' />
      </Route> */}

      {/* If the user is not logged in, redirect them to the login page */}
      {/* <Route element={<PrivateRoute />} path='/'> */}
      {/* The dashboard is a template for the rest of the pages and contains an outlet */}
      <Route element={<Dashboard />} path='/'>
        <Route path='/' />
        <Route element={<About />} path='/about' />
        <Route element={<Portfolio />} path='/portfolio' />
      </Route>
      {/* </Route> */}
    </Routes>
  )
}

export default App
