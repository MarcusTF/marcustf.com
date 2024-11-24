import { Outlet, Route, Routes } from "react-router-dom"

import { About, Dashboard, Portfolio } from "pages"
import { TEST_BOX, TEST_BOX2 } from "pages/Portfolio/Portfolio"

import "./App.scss"

function App() {
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
        <Route element={<Outlet />} path='/portfolio'>
          <Route path='' element={<Portfolio />} />
          <Route path='development' element={<TEST_BOX />} />
          <Route path='management' element={<TEST_BOX2 />} />
          <Route path='design' element={<Portfolio />} />
        </Route>
      </Route>
      <Route path='*' element={<h1>404</h1>} />
      {/* </Route> */}
    </Routes>
  )
}

export default App
